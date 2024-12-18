import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    ModalComponent,
    ButtonComponent,
    SideBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    SideBarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
