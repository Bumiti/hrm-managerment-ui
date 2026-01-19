import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ui-progress',
    templateUrl: './ui-progress.component.html',
    styleUrl: './ui-progress.component.scss',
    imports: [CommonModule]
})
export class UiProgressComponent {
  public routes = routes;
}
