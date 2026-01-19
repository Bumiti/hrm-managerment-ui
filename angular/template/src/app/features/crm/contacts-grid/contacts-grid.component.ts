import { Component, OnDestroy } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import {  breadCrumbItems, contactList } from '../../../shared/models/models';
import { DataService } from '../../../shared/data/data.service';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
interface apiResultFormat {
  data: contactList[]; // Nested array as per your console output
}
@Component({
    selector: 'app-contacts-grid',
    templateUrl: './contacts-grid.component.html',
    styleUrl: './contacts-grid.component.scss',
    imports: [CommonModule, RouterModule,BreadcrumbsComponent,CollapseHeaderComponent]
})
export class ContactsGridComponent implements OnDestroy {
  public routes = routes;
  public actualData: contactList[] = [];
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(
    private data: DataService,
  ) {
    this.breadCrumbItems = [
      { label: 'CRM' },
      { label: 'Contacts Grid', active: true }
  ];
    this.data.getContactlist().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
    });
  }
  isOpen = false
  openSuccessModal() {
    this.isOpen = !this.isOpen;
  }
  ngOnDestroy(): void {
    this.isOpen = false
  }
}
