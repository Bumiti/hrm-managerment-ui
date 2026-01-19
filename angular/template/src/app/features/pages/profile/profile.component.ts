import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../common/footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [CommonModule,FooterComponent,MatSelectModule,CollapseHeaderComponent,BreadcrumbsComponent]
})
export class ProfileComponent {
  breadCrumbItems: breadCrumbItems[] =[];
  public password: boolean[] = [false,false,false];
  togglePassword(index: number) {
    this.password[index] = !this.password[index];
  }
  constructor() {
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Profile', active: true }
  ];
}
}
