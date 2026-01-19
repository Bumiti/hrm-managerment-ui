import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-media',
    templateUrl: './ui-media.component.html',
    styleUrl: './ui-media.component.scss',
    imports: [CommonModule]
})
export class UiMediaComponent {
  public routes = routes;
}
