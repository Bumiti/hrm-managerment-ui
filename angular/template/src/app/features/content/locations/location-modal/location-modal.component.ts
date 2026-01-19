import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-location-modal',
    templateUrl: './location-modal.component.html',
    styleUrl: './location-modal.component.scss',
    imports: [CommonModule,MatSelectModule]
})
export class LocationModalComponent {

}
