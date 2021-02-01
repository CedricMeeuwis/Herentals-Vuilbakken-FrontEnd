import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewVuilbakComponent } from './new-vuilbak/new-vuilbak.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NewVuilbakComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class NewVuilbakModule { }
