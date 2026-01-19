import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-buttons',
    templateUrl: './ui-buttons.component.html',
    styleUrl: './ui-buttons.component.scss',
    imports: [CommonModule]
})
export class UiButtonsComponent {
  public routes = routes;
}
