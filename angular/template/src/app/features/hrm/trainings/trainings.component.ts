import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';
import { TrainingModalComponent } from './training-modal/training-modal.component';

@Component({
    selector: 'app-trainings',
    templateUrl: './trainings.component.html',
    styleUrl: './trainings.component.scss',
    imports: [CommonModule,RouterModule,FooterComponent,TrainingModalComponent]
})
export class TrainingsComponent {

}
