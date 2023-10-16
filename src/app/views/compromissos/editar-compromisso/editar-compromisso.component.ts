import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsCompromissoViewModel } from '../models/forms-compromisso.view-model';
import { ListarContatoViewModel } from '../../contatos/models/listar-contato.view-model';
import { ToastrService } from 'ngx-toastr';
import { CompromissoService } from '../services/compromissos.service';
import { contatosService } from '../../contatos/services/contatos.service';

@Component({
  selector: 'app-editar-compromisso',
  templateUrl: './editar-compromisso.component.html',
  styleUrls: ['./editar-compromisso.component.css'],
})
export class EditarCompromissoComponent implements OnInit {
  form!: FormGroup;
  compromissoVM!: FormsCompromissoViewModel;
  idSelecionado: string | null = null;
  contatos: ListarContatoViewModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private compromissoService: CompromissoService,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private contatoService: contatosService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      assunto: new FormControl('', [Validators.required]),
      tipoLocal: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      local: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      horaInicio: new FormControl('', [Validators.required]),
      horaTermino: new FormControl('', [Validators.required]),
      contatoId: new FormControl(''),
    });

    this.form
      .get('tipoLocal')
      ?.valueChanges.pipe()
      .subscribe((value) => {
        if (value === 0) {
          this.form.get('local')?.disable();
          this.form.get('link')?.enable();

          this.form.get('link')?.addValidators([Validators.required]);

          this.form.get('local')?.removeValidators([Validators.required]);

          this.form.get('local')?.setValue('');
        } else {
          this.form.get('link')?.disable();
          this.form.get('local')?.enable();

          this.form.get('link')?.removeValidators([Validators.required]);

          this.form.get('local')?.addValidators([Validators.required]);

          this.form.get('link')?.setValue('');
        }

        this.form.get('link')?.updateValueAndValidity();
        this.form.get('local')?.updateValueAndValidity();
      });

    this.contatoService.selecionarTodos().subscribe((res) => {
      this.contatos = res;
    });

    this.compromissoVM = this.route.snapshot.data['compromisso'];

    this.form.patchValue(this.compromissoVM);

    this.form.patchValue(this.compromissoVM);
    this.form
      .get('data')
      ?.setValue(this.compromissoVM.data.toString().substring(0, 10));
  }

  get assunto() {
    return this.form.get('assunto');
  }

  get link() {
    return this.form.get('link');
  }

  get local() {
    return this.form.get('local');
  }


  campoEstaInvalido(nome: string) {
    return this.form.get(nome)!.touched && this.form.get(nome)!.invalid;
  }

  gravar() {
    if (this.form.invalid) {
      for (let erro of this.form.validate()) {
        this.toastrService.warning(erro);
      }
      return;
    }

    this.compromissoVM = this.form.value;

    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.compromissoService.editar(id, this.compromissoVM).subscribe({
      next: (compromisso) => this.processarSucesso(compromisso),
      error: (erro) => this.processarFalha(erro),
    });
  }

  processarSucesso(compromisso: FormsCompromissoViewModel) {
    this.toastrService.success(
      `O compromisso "${compromisso.assunto}" foi editado com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/compromissos/listar']);
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Error');
  }
}