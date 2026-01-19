import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../common/footer/footer.component';

@Component({
    selector: 'app-super-admin',
    templateUrl: './super-admin.component.html',
    styleUrl: './super-admin.component.scss',
    imports: [RouterModule,FooterComponent]
})
export class SuperAdminComponent {

}
