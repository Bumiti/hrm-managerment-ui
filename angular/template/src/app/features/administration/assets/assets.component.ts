import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';
import { AssetModalComponent } from './asset-modal/asset-modal.component';

@Component({
    selector: 'app-assets',
    templateUrl: './assets.component.html',
    styleUrl: './assets.component.scss',
    imports: [CommonModule,RouterOutlet,FooterComponent,AssetModalComponent]
})
export class AssetsComponent {

}
