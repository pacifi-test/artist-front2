import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import {  ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },

]

@NgModule({
  providers: [],
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbEvaIconsModule,
    NbIconModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NbLayoutModule

  ],
  exports: [
    RouterModule
  ]
})
export class MainModule {
}
