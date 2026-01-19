import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-images',
    templateUrl: './ui-images.component.html',
    styleUrl: './ui-images.component.scss',
    imports: [CommonModule]
})
export class UiImagesComponent {
  public routes = routes;
}
