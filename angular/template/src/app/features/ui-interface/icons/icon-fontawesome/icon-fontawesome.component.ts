import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-icon-fontawesome',
    templateUrl: './icon-fontawesome.component.html',
    styleUrls: ['./icon-fontawesome.component.scss'],
    imports: [CommonModule]
})
export class IconFontawesomeComponent {
  public routes = routes;
}
