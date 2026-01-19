import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-typography',
    templateUrl: './ui-typography.component.html',
    styleUrl: './ui-typography.component.scss',
    imports: [CommonModule]
})
export class UiTypographyComponent {
  public routes = routes;
}
