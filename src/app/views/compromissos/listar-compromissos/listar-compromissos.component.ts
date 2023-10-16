import { Component } from '@angular/core';
import { ListarCompromissosViewModel } from '../models/listar-compromisso.view-model';
import { CompromissoService } from '../services/compromissos.service';

@Component({
  selector: 'app-listar-compromissos',
  templateUrl: './listar-compromissos.component.html',
  styleUrls: ['./listar-compromissos.component.css']
})
export class ListarCompromissosComponent {
  compromissos: ListarCompromissosViewModel[] = [];

  constructor(private compromissosService: CompromissoService){}

  ngOnInit(): void {
    this.compromissosService.selecionarTodos().subscribe((res) => {this.compromissos = res;});
  }
}
