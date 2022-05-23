import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainBoardRoutingModule } from './main-board-routing.module';
import { WhiteBoardComponent } from './white-board/white-board.component';


@NgModule({
  declarations: [WhiteBoardComponent],
  imports: [
    CommonModule,
    MainBoardRoutingModule
  ]
})
export class MainBoardModule { }
