import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { AccountComponent } from './account/account/account.component';
import { WachtVeranderComponent } from './wacht-verander/wacht-verander/wacht-verander.component';
import { VuilbakkenComponent } from './vuilbakken/vuilbakken/vuilbakken.component';

import { AuthAdminGuard } from './login/guards/auth-admin.guard';
import { AuthOphalerGuard } from './login/guards/auth-ophaler.guard';
import { AuthUserGuard } from './login/guards/auth-user.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthUserGuard] },
  { path: 'wachtVerandering', component: WachtVeranderComponent, canActivate: [AuthUserGuard] },
  { path: 'vuilbakken', component: VuilbakkenComponent, canActivate: [AuthUserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
