import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-borders',
    templateUrl: './ui-borders.component.html',
    styleUrl: './ui-borders.component.scss',
    imports: [CommonModule]
})
export class UiBordersComponent {
  public routes = routes;
}
