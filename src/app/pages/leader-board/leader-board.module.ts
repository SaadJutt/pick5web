import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LeaderBoardRoutingModule } from './leader-board-routing.module';
import { LeaderBoardComponent } from './leader-board.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaderBoardRoutingModule
  ],
  declarations: [LeaderBoardComponent],
  exports: [RouterModule]
})
export class LeaderBoardModule { }
