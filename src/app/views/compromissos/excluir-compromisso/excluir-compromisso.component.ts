import { Component } from '@angular/core';
import { VisualizarCompromissoViewModel } from '../models/visualizar-compromisso.view.model';
import { CompromissoService } from '../services/compromissos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-compromisso',
  templateUrl: './excluir-compromisso.component.html',
  styleUrls: ['./excluir-compromisso.component.css']
})
export class ExcluirCompromissoComponent {
  compromissoVM: VisualizarCompromissoViewModel;
  idSelecionado: string | null = null;

  constructor(
    private compromissoService: CompromissoService,
    private route: ActivatedRoute,
    private router: Router,
    ) 
    {
      this.compromissoVM = new VisualizarCompromissoViewModel('',0, '', '', '', new Date(), '','');
    }


  ngOnInit(): void {
    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if(!this.idSelecionado) return;

    this.compromissoService.selecionarCompromissoCompletoPorId(this.idSelecionado)
    .subscribe((res) => {
      this.compromissoVM = res;
    });
    }
    gravar() {
      this.compromissoService.excluir(this.idSelecionado!)
      .subscribe((res) => {
        this.router.navigate(['/compromissos', 'listar']);
        console.log(res);
      });
  }
}
