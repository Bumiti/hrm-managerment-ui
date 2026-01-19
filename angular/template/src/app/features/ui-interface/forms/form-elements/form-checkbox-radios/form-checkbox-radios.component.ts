import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-form-checkbox-radios',
    templateUrl: './form-checkbox-radios.component.html',
    styleUrl: './form-checkbox-radios.component.scss',
    imports: [CommonModule,FormsModule]
})
export class FormCheckboxRadiosComponent {
  public routes = routes;
}
