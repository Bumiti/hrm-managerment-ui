import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ui-buttons-group',
    templateUrl: './ui-buttons-group.component.html',
    styleUrl: './ui-buttons-group.component.scss',
    imports: [CommonModule]
})
export class UiButtonsGroupComponent {
  public routes = routes;
}
