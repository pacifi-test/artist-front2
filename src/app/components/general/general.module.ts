import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { NbButtonModule, NbUserModule } from '@nebular/theme';
import { NbSecurityModule } from '@nebular/security';


@NgModule({
  declarations: [
    CustomHeaderComponent
  ],
  imports: [
    CommonModule,
    NbUserModule,
    NbButtonModule,
    NbSecurityModule
  ],
  exports: [
    CustomHeaderComponent
  ]
})
export class GeneralModule {
}
