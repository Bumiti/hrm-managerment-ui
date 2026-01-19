import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { breadCrumbItems } from '../../../shared/models/models';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { RouterLink } from '@angular/router';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';

@Component({
    selector: 'app-packages-grid',
    templateUrl: './packages-grid.component.html',
    styleUrl: './packages-grid.component.scss',
    imports: [CommonModule,MatSelectModule,CollapseHeaderComponent,
      RouterLink,BreadcrumbsComponent,RouterLink
    ]
})
export class PackagesGridComponent {
  public routes = routes;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Super Admin' },
      { label: 'Purchase Transaction List', active: true }
  ];
}
}
