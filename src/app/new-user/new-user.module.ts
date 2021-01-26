import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NewUserComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class NewUserModule { }
