import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-icon-ionic',
    templateUrl: './icon-ionic.component.html',
    styleUrls: ['./icon-ionic.component.scss'],
    imports: [CommonModule]
})
export class IconIonicComponent {
  public routes = routes;
}
