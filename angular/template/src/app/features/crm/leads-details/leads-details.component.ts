import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { ContactsDetailsModalComponent } from '../contacts-details-modal/contacts-details-modal.component';
@Component({
    selector: 'app-leads-details',
    templateUrl: './leads-details.component.html',
    styleUrl: './leads-details.component.scss',
    imports: [CommonModule,RouterLink,MatSelectModule,ContactsDetailsModalComponent]
})
export class LeadsDetailsComponent {
routes = routes
}
