import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquetesComponent } from './enquetes/enquetes.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [EnquetesComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class EnquetesModule { }
