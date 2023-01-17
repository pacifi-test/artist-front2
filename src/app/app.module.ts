import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { NbAuthJWTToken, NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy } from '@nebular/auth';
import { defaultSettingsAuth } from './auth.forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'corporate'}),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [

        NbPasswordAuthStrategy.setup({
          token: {
            class: NbAuthJWTToken,
            key: 'token'
          },
          name: 'email',
          baseEndpoint: 'http://localhost:8000',
          login: {
            endpoint: '/api-auth/login/',
            method: 'post'
          },
          logout: {
            endpoint: 'api-auth/logout/',
            method: 'post'
          },
          requestPass: {
            endpoint: '/api/token',
            method: 'post'
          },
          resetPass: {
            endpoint: '/api/token/refresh',
            method: 'post'
          },
        })
      ],
      forms: {defaultSettingsAuth},
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
