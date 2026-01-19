import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-dropdowns',
    templateUrl: './ui-dropdowns.component.html',
    styleUrl: './ui-dropdowns.component.scss',
    imports: [CommonModule]
})
export class UiDropdownsComponent {
  public routes = routes;
}
