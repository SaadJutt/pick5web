import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayingHistoryComponent } from './paying-history.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: PayingHistoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class PayingHistoryRoutingModule { }
