import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tables-basic',
    templateUrl: './tables-basic.component.html',
    styleUrl: './tables-basic.component.scss',
    imports: [CommonModule]
})
export class TablesBasicComponent {
 public routes=routes;
}
