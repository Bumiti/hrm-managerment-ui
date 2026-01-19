import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';
@Component({
    selector: 'app-base-ui',
    templateUrl: './base-ui.component.html',
    styleUrl: './base-ui.component.scss',
    imports: [RouterModule,FooterComponent]
})
export class BaseUiComponent {

}
