import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-form-floating-labels',
    templateUrl: './form-floating-labels.component.html',
    styleUrl: './form-floating-labels.component.scss',
    imports: [CommonModule,FormsModule]
})
export class FormFloatingLabelsComponent {
  public routes = routes;
}
