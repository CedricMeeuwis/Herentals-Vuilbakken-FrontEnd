import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WachtVeranderComponent } from './wacht-verander/wacht-verander.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [WachtVeranderComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class WachtVeranderModule { }
