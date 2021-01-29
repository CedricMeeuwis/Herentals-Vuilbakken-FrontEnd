import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuilbakkenComponent } from './vuilbakken/vuilbakken.component';
import { SharedModule } from '../shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AlertModule } from '@full-fledged/alerts';


@NgModule({
  declarations: [VuilbakkenComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionY: 'bottom'}),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ]
})
export class VuilbakkenModule { }
