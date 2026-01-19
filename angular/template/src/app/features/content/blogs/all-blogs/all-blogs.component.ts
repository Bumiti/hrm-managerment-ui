import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../shared/models/models';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { CollapseHeaderComponent } from '../../../common/collapse-header/collapse-header.component';
import { BreadcrumbsComponent } from '../../../common/breadcrumbs/breadcrumbs.component';

@Component({
    selector: 'app-all-blogs',
    templateUrl: './all-blogs.component.html',
    styleUrl: './all-blogs.component.scss',
    imports: [CommonModule,RouterLink,BsDatepickerModule,FormsModule,
      CollapseHeaderComponent,BreadcrumbsComponent
    ]
})
export class AllBlogsComponent {
public routes=routes;
breadCrumbItems: breadCrumbItems[] =[];
bsValue = new Date();
bsRangeValue: Date[];
maxDate = new Date();
values1: string[] = ['Sidebar','Header','Footer'];
constructor(){
  this.breadCrumbItems = [
    { label: 'Content' },
    { label: 'Blogs', active: true }
];
this.maxDate.setDate(this.maxDate.getDate() + 7);
this.bsRangeValue = [this.bsValue, this.maxDate];

}
}
