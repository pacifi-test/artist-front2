import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import {
  NbAuthJWTToken,
  NbAuthModule,
  NbAuthSimpleToken,
  NbDummyAuthStrategy,
  NbPasswordAuthStrategy
} from '@nebular/auth';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { RoleProviderService } from './services/role.provider.service';
import { of } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'corporate'}),
    NbEvaIconsModule,
    HttpClientModule,
    NbSecurityModule.forRoot({
      accessControl: {
        Venta: {
          view: ['user', 'logout'],
        },
        Admin: {
          view: ['main', 'logout', 'form'],
        },

      },
    }),
    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'dummy',
        }),
        NbPasswordAuthStrategy.setup({
          name: 'real',
          token: {
            class: NbAuthJWTToken,
            key: 'access',
          },
          baseEndpoint: 'http://localhost:8000',
          login: {
            endpoint: '/api/token',
            method: 'post',
          },
          register: {
            endpoint: '/auth/sign-up',
            method: 'post',
          },
          logout: {
            endpoint: '/auth/sign-out',
            method: 'post',
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post',
          },


        })
      ],
      forms: {
        login: {
          redirectDelay: 0, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'real',  // strategy id key.
          rememberMe: true,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
          redirect: {
            success: '/main',
            failure: null
          }
        },
      },
    }),
  ],
  providers: [{
    provide: NbRoleProvider,
    useClass: RoleProviderService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
