import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './app-interceptors/loader-interceptor';
import { JwtInterceptor } from './app-interceptors/jwt-interceptor';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { DistributionModule } from './distribution/distribution.module';
import { HttpErrorInterceptor } from './app-interceptors/http-error-interceptor';
import { SimpleNotificationsModule, NotificationAnimationType } from 'angular2-notifications';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    // AppHeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    AuthModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
  
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    SimpleNotificationsModule.forRoot({
      position:["top", "right"],
      timeOut:3000,
      showProgressBar:true,
      pauseOnHover:true,
      lastOnBottom:true,
      clickIconToClose:true,
      maxStack:5,
      animate:NotificationAnimationType.FromRight
    }),
    SharedModule.forRoot({appAlertId:'appAlertId'}),
    DistributionModule,  
    BrowserAnimationsModule, PopoverModule.forRoot(), StoreModule.forRoot({}, {}), EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    DatePipe,
    {provide: APP_BASE_HREF, useValue: environment.BASE_HREF},
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    {provide: MAT_DATE_LOCALE, useValue: 'en-IN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
