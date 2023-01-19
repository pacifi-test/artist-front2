import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container.component';
import * as path from 'path';
import { RolesGuard } from '../../guards/roles.guard';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../main/main.module').then(m => m.MainModule),
        canActivate: [RolesGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule),
        canActivate: [RolesGuard]
      },
      {
        path: 'form',
        loadChildren: () => import('../form/form.module').then(m => m.FormModule)
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule {
}
