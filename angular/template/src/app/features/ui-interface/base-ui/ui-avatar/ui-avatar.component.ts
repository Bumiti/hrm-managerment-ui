import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-avatar',
    templateUrl: './ui-avatar.component.html',
    styleUrl: './ui-avatar.component.scss',
    imports: [CommonModule]
})
export class UiAvatarComponent {
  public routes = routes;
}
