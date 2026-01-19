import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-timeline',
    templateUrl: './ui-timeline.component.html',
    styleUrl: './ui-timeline.component.scss',
    imports: [CommonModule]
})
export class UiTimelineComponent {
  public routes = routes;
}
