import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-grid',
    templateUrl: './ui-grid.component.html',
    styleUrl: './ui-grid.component.scss',
    imports: [CommonModule]
})
export class UiGridComponent {
  public routes = routes;
}
