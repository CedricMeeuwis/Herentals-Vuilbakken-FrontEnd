import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewZoneComponent } from './new-zone/new-zone.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NewZoneComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class NewZoneModule { }
