import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-icon-themify',
    templateUrl: './icon-themify.component.html',
    styleUrls: ['./icon-themify.component.scss'],
    imports: [CommonModule]
})
export class IconThemifyComponent {
  public routes = routes;

   

   
}
