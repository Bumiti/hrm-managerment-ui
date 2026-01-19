import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-placeholders',
    templateUrl: './ui-placeholders.component.html',
    styleUrl: './ui-placeholders.component.scss',
    imports: [CommonModule]
})
export class UiPlaceholdersComponent {
  public routes = routes;
}
