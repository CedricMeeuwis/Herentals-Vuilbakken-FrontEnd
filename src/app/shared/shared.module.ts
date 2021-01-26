import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
  ],
  exports: [
    FormsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
  ]
})
export class SharedModule { }
