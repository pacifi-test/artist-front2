import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { NbButtonModule, NbUserModule } from '@nebular/theme';


@NgModule({
  declarations: [
    CustomHeaderComponent
  ],
  imports: [
    CommonModule,
    NbUserModule,
    NbButtonModule
  ],
  exports: [
    CustomHeaderComponent
  ]
})
export class GeneralModule {
}
