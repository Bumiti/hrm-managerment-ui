import { Component, OnDestroy } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import {  apiResultFormat, breadCrumbItems, Company } from '../../../shared/models/models';
import { DataService } from '../../../shared/data/data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';

@Component({
    selector: 'app-companies-grid', 
    templateUrl: './companies-grid.component.html',
    styleUrl: './companies-grid.component.scss',
    imports: [CommonModule, RouterModule,BreadcrumbsComponent,CollapseHeaderComponent]
})
export class CompaniesGridComponent implements OnDestroy {
  public routes = routes;
  public actualData: Company[] = [];
  breadCrumbItems: breadCrumbItems[] =[];
  isOpen = false
  openSuccessModal() {
    this.isOpen = !this.isOpen;
  }
  ngOnDestroy(): void {
    this.isOpen = false
  }
  constructor(
    private data: DataService,
  ) {
    this.breadCrumbItems = [
      { label: 'CRM' },
      { label: 'Companies Grid', active: true }
  ];
    this.data.getCompany().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
    });
  }
}
