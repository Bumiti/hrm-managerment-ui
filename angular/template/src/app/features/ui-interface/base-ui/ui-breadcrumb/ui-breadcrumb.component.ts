import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-breadcrumb',
    templateUrl: './ui-breadcrumb.component.html',
    styleUrl: './ui-breadcrumb.component.scss',
    imports: [CommonModule]
})
export class UiBreadcrumbComponent {
  public routes = routes;
}
