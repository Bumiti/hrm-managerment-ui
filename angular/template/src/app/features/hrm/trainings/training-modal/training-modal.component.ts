import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-training-modal',
    templateUrl: './training-modal.component.html',
    styleUrl: './training-modal.component.scss',
    imports: [MatSelectModule,CommonModule,BsDatepickerModule]
})
export class TrainingModalComponent {

}
