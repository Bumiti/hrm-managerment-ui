import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../common/footer/footer.component';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss',
    imports: [CommonModule,FooterComponent,CollapseHeaderComponent,BreadcrumbsComponent]
})
export class PrivacyPolicyComponent {
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Privacy Policy', active: true }
  ];
}
}
