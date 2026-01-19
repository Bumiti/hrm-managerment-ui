import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-icon-feather',
    templateUrl: './icon-feather.component.html',
    styleUrls: ['./icon-feather.component.scss'],
    imports: [CommonModule]
})
export class IconFeatherComponent {
  public routes = routes;
}
