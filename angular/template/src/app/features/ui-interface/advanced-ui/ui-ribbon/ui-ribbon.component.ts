import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-ribbon',
    templateUrl: './ui-ribbon.component.html',
    styleUrl: './ui-ribbon.component.scss',
    imports: [CommonModule]
})
export class UiRibbonComponent {
  public routes = routes;
}
