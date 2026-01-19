import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';
import { PerfomanceModalComponent } from './perfomance-modal/perfomance-modal.component';

@Component({
    selector: 'app-performance',
    templateUrl: './performance.component.html',
    styleUrl: './performance.component.scss',
    imports: [CommonModule,RouterModule,FooterComponent,PerfomanceModalComponent]
})
export class PerformanceComponent {

}
