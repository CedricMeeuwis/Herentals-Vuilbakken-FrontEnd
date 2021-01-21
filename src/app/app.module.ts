import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecurityInterceptor } from './login/security.interceptor';
import { HeaderComponent } from './header/header.component';
import { AccountModule } from './account/account.module';
import { WachtVeranderModule } from './wacht-verander/wacht-verander.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    SharedModule,
    AccountModule,
    WachtVeranderModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
