import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { breadCrumbItems } from '../../../shared/models/models';
import { CommonModule } from '@angular/common';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { RouterLink } from '@angular/router';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';

@Component({
    selector: 'app-project-grid',
    templateUrl: './project-grid.component.html',
    styleUrl: './project-grid.component.scss',
    imports: [CommonModule,CollapseHeaderComponent,RouterLink,
      BreadcrumbsComponent
    ]
})
export class ProjectGridComponent {
  public routes = routes
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Projects Grid', active: true }
  ];
}
}
