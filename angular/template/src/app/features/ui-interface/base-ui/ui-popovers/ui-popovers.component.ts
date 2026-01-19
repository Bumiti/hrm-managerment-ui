import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-popovers',
    templateUrl: './ui-popovers.component.html',
    styleUrl: './ui-popovers.component.scss',
    imports: [CommonModule]
})
export class UiPopoversComponent {
  public routes = routes;
}
