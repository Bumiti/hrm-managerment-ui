import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollapseHeaderComponent } from '../../../common/collapse-header/collapse-header.component';
import { DateRangePickerComponent } from '../../../common/date-range-picker/date-range-picker.component';

@Component({
    selector: 'app-knowledgebase-view',
    templateUrl: './knowledgebase-view.component.html',
    styleUrl: './knowledgebase-view.component.scss',
    imports: [CommonModule,RouterLink,CollapseHeaderComponent,DateRangePickerComponent]
})
export class KnowledgebaseViewComponent {
routes =routes
}
