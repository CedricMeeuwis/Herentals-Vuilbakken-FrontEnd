import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuilbakkenComponent } from './vuilbakken/vuilbakken.component';
import { SharedModule } from '../shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [VuilbakkenComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonToggleModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    NgxSliderModule,
  ]
})
export class VuilbakkenModule { }
