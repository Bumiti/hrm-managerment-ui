import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-form-elements',
    templateUrl: './form-elements.component.html',
    styleUrl: './form-elements.component.scss',
    imports: [CommonModule]
})
export class FormElementsComponent {
  public routes = routes;
}
