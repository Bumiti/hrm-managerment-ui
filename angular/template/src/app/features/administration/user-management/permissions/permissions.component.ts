import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { CollapseHeaderComponent } from '../../../common/collapse-header/collapse-header.component';

@Component({
    selector: 'app-permissions',
    templateUrl: './permissions.component.html',
    styleUrl: './permissions.component.scss',
    imports: [CommonModule,FormsModule,MatSelectModule,RouterLink,CollapseHeaderComponent]
})
export class PermissionsComponent {
routes = routes
}
