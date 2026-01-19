import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-accordion',
    templateUrl: './ui-accordion.component.html',
    styleUrl: './ui-accordion.component.scss',
    imports: [CommonModule]
})
export class UiAccordionComponent {
  public routes = routes;
}
