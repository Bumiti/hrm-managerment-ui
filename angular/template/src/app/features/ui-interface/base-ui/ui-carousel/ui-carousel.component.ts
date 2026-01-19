import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-carousel',
    templateUrl: './ui-carousel.component.html',
    styleUrl: './ui-carousel.component.scss',
    imports: [CommonModule]
})
export class UiCarouselComponent {
  public routes = routes;
}
