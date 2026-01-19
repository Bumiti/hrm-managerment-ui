import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-ui-stickynote',
    templateUrl: './ui-stickynote.component.html',
    styleUrl: './ui-stickynote.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class UiStickynoteComponent {
  notes = [];
  public routes = routes;
}
