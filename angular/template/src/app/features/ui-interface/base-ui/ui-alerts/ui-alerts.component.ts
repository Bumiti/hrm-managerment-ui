import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-alerts',
    templateUrl: './ui-alerts.component.html',
    styleUrl: './ui-alerts.component.scss',
    imports: [CommonModule]
})
export class UiAlertsComponent {
  public routes = routes;
}
