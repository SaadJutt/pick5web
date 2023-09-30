import { NgModule } from '@angular/core';
import { AddFundComponent } from './add-fund.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AddFundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class AddFundRoutingModule { }
