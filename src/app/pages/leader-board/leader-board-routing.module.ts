import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderBoardComponent } from './leader-board.component';

const routes: Routes = [
  {
    path: '',
    component: LeaderBoardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class LeaderBoardRoutingModule { }
