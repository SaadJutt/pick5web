import { NgModule } from '@angular/core';
import { BandListsComponent } from './band-lists.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: BandListsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class BandListsRoutingModule { }
