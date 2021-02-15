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
import { UserManageModule } from './user-manage/user-manage.module';
import { FooterComponent } from './footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SurveyComponent } from './survey/survey.component';
import { SurveyCreatorComponent } from './survey/survey.creator.component';
import { EnqueteEditComponent } from './enquete-edit/enquete-edit.component';
import { EnquetesModule } from './enquetes/enquetes.module';
import { EnqueteComponent } from './enquete/enquete.component';
import { VuilbakkenManageModule} from './vuilbakken-manage/vuilbakken-manage.module';
import { ZonesManageModule} from './zones-manage/zones-manage.module';
import { NewUserModule} from './new-user/new-user.module';
import { NewVuilbakModule} from './new-vuilbak/new-vuilbak.module';
import { NewZoneModule } from './new-zone/new-zone.module';
import { EnqueteAntwoordenComponent } from './enquete-antwoorden/enquete-antwoorden.component';
import { SurveyAnalyticsComponent } from './survey/survey.analytics.component';
import { SurveyAnalyticsDatatablesComponent } from './survey/survey.analytics.datatables';
import { SurveyAnalyticsTabulatorComponent } from './survey/survey.analytics.tabulator';
import { AlertModule } from '@full-fledged/alerts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SurveyComponent,
    SurveyCreatorComponent,
    SurveyAnalyticsComponent,
    SurveyAnalyticsDatatablesComponent,
    SurveyAnalyticsTabulatorComponent,
    EnqueteEditComponent,
    EnqueteComponent,
    EnqueteAntwoordenComponent,
  ],
  imports: [
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, positionY: 'bottom'}),
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
    VuilbakkenManageModule,
    UserManageModule,
    ZonesManageModule,
    AppRoutingModule,
    NewUserModule,
    NewVuilbakModule,
    NewZoneModule,
    NgbModule,
    BrowserAnimationsModule,
    EnquetesModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
