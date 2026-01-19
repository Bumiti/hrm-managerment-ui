import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-icon-typicon',
    templateUrl: './icon-typicon.component.html',
    styleUrls: ['./icon-typicon.component.scss'],
    imports: [CommonModule]
})
export class IconTypiconComponent {
  public routes = routes;

   

   
}
