import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-form-input-groups',
    templateUrl: './form-input-groups.component.html',
    styleUrls: ['./form-input-groups.component.scss'],
    imports: [CommonModule]
})
export class FormInputGroupsComponent {
  public routes = routes;
}
