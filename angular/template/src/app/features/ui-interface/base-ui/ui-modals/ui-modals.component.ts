import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-modals',
    templateUrl: './ui-modals.component.html',
    styleUrl: './ui-modals.component.scss',
    imports: [CommonModule]
})
export class UiModalsComponent {
  public routes = routes;
}
