import { Component, Input } from '@angular/core';
import { VisualizarCompromissoViewModel } from '../models/visualizar-compromisso.view.model';

@Component({
  selector: 'app-card-compromissos',
  templateUrl: './card-compromissos.component.html',
  styleUrls: ['./card-compromissos.component.css']
})
export class CardCompromissosComponent {
  @Input ({required: true}) compromisso!: VisualizarCompromissoViewModel;
}
