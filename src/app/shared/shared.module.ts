import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
