import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

@Component({
    selector: 'app-contact-modal',
    templateUrl: './contact-modal.component.html',
    styleUrl: './contact-modal.component.scss',
    imports: [MatSelectModule,RouterLink,CommonModule,BsDatepickerModule,FormsModule,TagInputModule]
})
export class ContactModalComponent {
  public routes = routes;
  values: string[] = ['Collab', 'Promotion', 'Rated', 'Davis'];
  values1:string[]=['Vaughan Lewis'];
}
