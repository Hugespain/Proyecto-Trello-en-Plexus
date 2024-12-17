import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    CardComponent,
    ModalComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
