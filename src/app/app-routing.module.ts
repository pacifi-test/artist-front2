import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent, NbResetPasswordComponent
} from '@nebular/auth';
import { NgxAuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import("./pages/main/main.module").then(m => m.MainModule)
  },
  {
    path: 'auth',
    loadChildren: () => import("./auth/auth.module").then(m => m.NgxAuthModule)
  },
  {
    path: '**',
    redirectTo: 'main'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
