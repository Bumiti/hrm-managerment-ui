import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { ContactsDetailsModalComponent } from '../contacts-details-modal/contacts-details-modal.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-deals-details',
    templateUrl: './deals-details.component.html',
    styleUrl: './deals-details.component.scss',
    imports : [CommonModule,MatSelectModule,MatFormFieldModule,BsDatepickerModule,
      FormsModule,ContactsDetailsModalComponent,RouterLink]
})
export class DealsDetailsComponent {
public routes=routes;
}
