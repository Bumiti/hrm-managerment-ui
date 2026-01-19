import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
    selector: 'app-form-mask',
    templateUrl: './form-mask.component.html',
    styleUrls: ['./form-mask.component.scss'],
    imports: [CommonModule,NgxMaskDirective,FormsModule,ReactiveFormsModule]
})
export class FormMaskComponent{
  public routes = routes;
  
}
