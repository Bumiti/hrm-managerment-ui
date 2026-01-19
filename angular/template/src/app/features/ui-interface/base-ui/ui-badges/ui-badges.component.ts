import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-badges',
    templateUrl: './ui-badges.component.html',
    styleUrl: './ui-badges.component.scss',
    imports: [CommonModule]
})
export class UiBadgesComponent {
  public routes = routes;
}
