import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { InserirCategoriasComponent } from './inserir-categorias/inserir-categorias.component';
import { CategoriasService } from './services/categoria.service';
import { ReactiveFormsModule } from '@angular/forms';
import 'src/app/extensions/form-group.extension';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { CardCategoriaComponent } from './card-categoria/card-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './excluir-categoria/excluir-categoria.component';


@NgModule({
  declarations: [
    InserirCategoriasComponent,
    ListarCategoriasComponent,
    CardCategoriaComponent,
    EditarCategoriaComponent,
    ExcluirCategoriaComponent,
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    CategoriasService,
  ]
})
export class CategoriasModule { }
