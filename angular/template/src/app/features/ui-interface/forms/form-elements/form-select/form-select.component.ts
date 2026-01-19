import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-form-select',
    templateUrl: './form-select.component.html',
    styleUrl: './form-select.component.scss',
    imports: [CommonModule]
})
export class FormSelectComponent {
  public routes = routes;
}
