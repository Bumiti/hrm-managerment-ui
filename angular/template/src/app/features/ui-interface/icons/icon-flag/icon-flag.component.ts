import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-icon-flag',
    templateUrl: './icon-flag.component.html',
    styleUrls: ['./icon-flag.component.scss'],
    imports: [CommonModule]
})
export class IconFlagComponent {
  public routes = routes;
}
