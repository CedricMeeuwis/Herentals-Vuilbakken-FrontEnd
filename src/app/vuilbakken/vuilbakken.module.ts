import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuilbakkenComponent } from './vuilbakken/vuilbakken.component';
import { SharedModule } from '../shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [VuilbakkenComponent],
  imports: [
    CommonModule,
    SharedModule,

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
