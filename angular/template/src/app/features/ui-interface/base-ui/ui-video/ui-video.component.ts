import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-video',
    templateUrl: './ui-video.component.html',
    styleUrl: './ui-video.component.scss',
    imports: [CommonModule]
})
export class UiVideoComponent {
  public routes = routes;
}
