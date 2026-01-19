import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from '../../common/footer/footer.component';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.scss',
    imports: [CommonModule,MatSelectModule,FooterComponent,CollapseHeaderComponent,
      BreadcrumbsComponent
    ]
})
export class PricingComponent {
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Pricing', active: true }
  ];
}
}
