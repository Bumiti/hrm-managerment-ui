import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-spinner',
    templateUrl: './ui-spinner.component.html',
    styleUrl: './ui-spinner.component.scss',
    imports: [CommonModule]
})
export class UiSpinnerComponent {
  public routes = routes;
}
