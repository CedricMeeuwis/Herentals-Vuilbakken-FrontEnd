import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { AccountComponent } from './account/account/account.component';
import { WachtVeranderComponent } from './wacht-verander/wacht-verander/wacht-verander.component';
import { VuilbakkenComponent } from './vuilbakken/vuilbakken/vuilbakken.component';
import { UserManageComponent } from './user-manage/user-manage/user-manage.component';
import { NewUserComponent } from './new-user/new-user/new-user.component';
import { EnquetesComponent } from './enquetes/enquetes/enquetes.component';
import { EnqueteEditComponent } from './enquete-edit/enquete-edit.component';
import { EnqueteComponent } from './enquete/enquete.component';

import { AuthAdminGuard } from './login/guards/auth-admin.guard';
import { AuthOphalerGuard } from './login/guards/auth-ophaler.guard';
import { AuthManagersGuard } from './login/guards/auth-managers.guard';
import { AuthUserGuard } from './login/guards/auth-user.guard';
import { VuilbakkenManageComponent } from './vuilbakken-manage/vuilbakken-manage/vuilbakken-manage.component';
import { ZonesManageComponent } from './zones-manage/zones-manage/zones-manage.component';
import { NewVuilbakComponent } from './new-vuilbak/new-vuilbak/new-vuilbak.component';
import { NewZoneComponent } from './new-zone/new-zone/new-zone.component';
import { EnqueteAntwoordenComponent } from './enquete-antwoorden/enquete-antwoorden.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthUserGuard] },
  { path: 'wachtVerandering', component: WachtVeranderComponent, canActivate: [AuthUserGuard] },
  { path: 'vuilbakken', component: VuilbakkenComponent, canActivate: [AuthUserGuard] },
  { path: 'vuilbakken-manage', component: VuilbakkenManageComponent,  canActivate: [AuthUserGuard] },
  { path: 'zones-manage', component: ZonesManageComponent,  canActivate: [AuthUserGuard] },
  { path: 'gebruikers', component: UserManageComponent, canActivate: [AuthManagersGuard] },
  { path: 'nieuwe-gebruiker', component: NewUserComponent, canActivate: [AuthManagersGuard] },
  { path: 'enquetes', component: EnquetesComponent, canActivate: [AuthAdminGuard] },
  { path: 'enquete-nieuw', component: EnqueteEditComponent, canActivate: [AuthAdminGuard] },
  { path: 'enquete/:id', component: EnqueteComponent},
  { path: 'enquete-antwoord/:id', component: EnqueteAntwoordenComponent, canActivate: [AuthAdminGuard] },
  { path: 'nieuwe-vuilbak', component: NewVuilbakComponent, canActivate: [AuthManagersGuard] },
  { path: 'nieuwe-zone', component: NewZoneComponent, canActivate: [AuthManagersGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
