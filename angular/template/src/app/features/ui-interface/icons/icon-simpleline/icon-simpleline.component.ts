import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-icon-simpleline',
    templateUrl: './icon-simpleline.component.html',
    styleUrls: ['./icon-simpleline.component.scss'],
    imports: [CommonModule]
})
export class IconSimplelineComponent {
  public routes = routes;

   

   
}
