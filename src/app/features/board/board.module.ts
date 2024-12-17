import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './components/board/board.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    BoardComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
