import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuilbakkenComponent } from './vuilbakken/vuilbakken.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [VuilbakkenComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class VuilbakkenModule { }
