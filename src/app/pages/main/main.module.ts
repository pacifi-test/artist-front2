import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    FormsModule

  ],
  exports: [
    RouterModule
  ]
})
export class MainModule {
}
