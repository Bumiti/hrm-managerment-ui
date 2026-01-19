import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../shared/models/models';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../../../common/breadcrumbs/breadcrumbs.component';
import { CollapseHeaderComponent } from '../../../common/collapse-header/collapse-header.component';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-performance-review',
    templateUrl: './performance-review.component.html',
    styleUrl: './performance-review.component.scss',
    imports : [MatSelectModule,CommonModule,BreadcrumbsComponent,CollapseHeaderComponent,FormsModule]
})
export class PerformanceReviewComponent {
  public routes = routes;
  initChecked = false;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(){
    this.breadCrumbItems = [
            { label: 'Performance' },
            { label: 'Performance Reviews', active: true }
        ];
  }
}
