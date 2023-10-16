import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCompromissosComponent } from './card-compromissos/card-compromissos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListarCompromissosComponent } from './listar-compromissos/listar-compromissos.component';
import { InserirCompromissoComponent } from './inserir-compromisso/inserir-compromisso.component';
import { ExcluirCompromissoComponent } from './excluir-compromisso/excluir-compromisso.component';
import { CompromissosRoutingModule } from './compromissos-routing.module';
import { ContatosModule } from '../contatos/contatos.module';
import { EditarCompromissoComponent } from './editar-compromisso/editar-compromisso.component';



@NgModule({
  declarations: [
    CardCompromissosComponent,
    ListarCompromissosComponent,
    InserirCompromissoComponent,
    ExcluirCompromissoComponent,
    EditarCompromissoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompromissosRoutingModule,

    ContatosModule,
  ]
})
export class CompromissosModule { }
