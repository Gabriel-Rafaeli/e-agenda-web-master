import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsCategoriaViewModel } from '../models/forms-categoria.view-model';
import { CategoriasService } from '../services/categoria.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inserir-categorias',
  templateUrl: './inserir-categorias.component.html',
  styleUrls: ['./inserir-categorias.component.css']
})
export class InserirCategoriasComponent implements OnInit{
  form?: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private categoriaService: CategoriasService, 
    private toastrService: ToastrService,
    private router: Router){}


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required]),
    });
  }

  gravar(){
    if (this.form?.invalid) {

      for (let erro of this.form.validate()) {
        this.toastrService.warning(erro);
      }
  
         return;
      }

      this.categoriaService.inserir(this.form?.value).subscribe(res => {
        this.toastrService.success(
          `O categoria "${res.titulo}" foi cadastrada com sucesso!`,
          'Sucesso'
        );
    
        this.router.navigate(['/categorias/listar']);
      })
  }

  campoEstaInvalido(nome: string){
    return this.form?.get(nome)!.touched && this.form?.get(nome)!.invalid;
  }
}
