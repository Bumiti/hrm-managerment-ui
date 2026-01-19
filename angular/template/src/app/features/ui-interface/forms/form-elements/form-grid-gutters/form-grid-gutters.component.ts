import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-form-grid-gutters',
    templateUrl: './form-grid-gutters.component.html',
    styleUrl: './form-grid-gutters.component.scss',
    imports: [CommonModule]
})
export class FormGridGuttersComponent {
  public routes = routes;
}
