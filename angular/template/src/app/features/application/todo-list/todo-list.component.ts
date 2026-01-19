import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from '../../common/footer/footer.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxEditorModule } from 'ngx-editor';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss',
    imports:[CommonModule,MatSelectModule,FooterComponent,BsDatepickerModule,NgxEditorModule,DateRangePickerComponent,
        CollapseHeaderComponent,RouterLink
    ]
})
export class TodoListComponent {
routes = routes
}
