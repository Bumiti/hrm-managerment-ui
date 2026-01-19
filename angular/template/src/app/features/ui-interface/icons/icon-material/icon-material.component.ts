import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-icon-material',
    templateUrl: './icon-material.component.html',
    styleUrls: ['./icon-material.component.scss'],
    imports: [CommonModule]
})
export class IconMaterialComponent {
  public routes = routes;
}
