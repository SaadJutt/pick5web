import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayingHistoryComponent } from './playing-history.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: PlayingHistoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class PlayingHistoryRoutingModule { }
