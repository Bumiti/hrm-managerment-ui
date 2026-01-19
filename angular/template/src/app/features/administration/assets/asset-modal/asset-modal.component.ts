import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-asset-modal',
    templateUrl: './asset-modal.component.html',
    styleUrl: './asset-modal.component.scss',
    imports: [CommonModule,MatSelectModule,BsDatepickerModule]
})
export class AssetModalComponent {

}
