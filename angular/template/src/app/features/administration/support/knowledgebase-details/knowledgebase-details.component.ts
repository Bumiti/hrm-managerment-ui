import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CollapseHeaderComponent } from '../../../common/collapse-header/collapse-header.component';
import { DateRangePickerComponent } from '../../../common/date-range-picker/date-range-picker.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-knowledgebase-details',
    templateUrl: './knowledgebase-details.component.html',
    styleUrl: './knowledgebase-details.component.scss',
    imports: [CollapseHeaderComponent,DateRangePickerComponent,RouterLink]
})
export class KnowledgebaseDetailsComponent {
routes= routes
}
