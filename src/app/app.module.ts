import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { SecurityInterceptor } from './login/security.interceptor';
import { HeaderComponent } from './header/header.component';
import { AccountModule } from './account/account.module';
import { WachtVeranderModule } from './wacht-verander/wacht-verander.module';
import { VuilbakkenModule } from './vuilbakken/vuilbakken.module';
import { FooterComponent } from './footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    BrowserModule,
    HttpClientModule,
    LoginModule,
    SharedModule,
    AccountModule,
    WachtVeranderModule,
    VuilbakkenModule,
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
