import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-colors',
    templateUrl: './ui-colors.component.html',
    styleUrl: './ui-colors.component.scss',
    imports: [CommonModule]
})
export class UiColorsComponent {
  public routes = routes;
}
