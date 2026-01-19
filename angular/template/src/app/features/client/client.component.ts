import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../common/footer/footer.component';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrl: './client.component.scss',
    imports: [RouterModule,FooterComponent]
})
export class ClientComponent {

}
