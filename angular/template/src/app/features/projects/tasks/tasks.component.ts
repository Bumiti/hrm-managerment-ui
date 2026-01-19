import { routes } from './../../../shared/routes/routes';
import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';
import { CommonModule } from '@angular/common';
import { TaskTabContentComponent } from './task-tab-content/task-tab-content.component';
import { RouterLink } from '@angular/router';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss',
    imports: [CommonModule,TaskTabContentComponent,RouterLink,CollapseHeaderComponent,BreadcrumbsComponent]
})
export class TasksComponent {
  public routes = routes
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Task', active: true }
  ];
}
}
