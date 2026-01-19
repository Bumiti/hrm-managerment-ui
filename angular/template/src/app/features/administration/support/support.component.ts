import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrl: './support.component.scss',
    imports: [CommonModule,RouterOutlet,FooterComponent]
})
export class SupportComponent {

}
