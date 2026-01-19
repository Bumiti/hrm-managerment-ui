import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-pagination',
    templateUrl: './ui-pagination.component.html',
    styleUrl: './ui-pagination.component.scss',
    imports: [CommonModule]
})
export class UiPaginationComponent {
  public routes = routes;
}
