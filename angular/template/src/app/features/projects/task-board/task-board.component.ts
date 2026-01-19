import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';
import { CommonModule } from '@angular/common';
import { LowTaskComponent } from './low-task/low-task.component';
import { MediumTaskComponent } from './medium-task/medium-task.component';
import { HighTaskComponent } from './high-task/high-task.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';


@Component({
    selector: 'app-task-board',
    templateUrl: './task-board.component.html',
    styleUrl: './task-board.component.scss',
    imports: [CommonModule,LowTaskComponent,MediumTaskComponent,HighTaskComponent,AllTaskComponent,CollapseHeaderComponent,BreadcrumbsComponent]
})
export class TaskBoardComponent {
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Task Board', active: true }
  ];
}
}


