import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ByBandComponent } from './by-band.component';

const routes: Routes = [
  {
    path: '',
    component: ByBandComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ByBandRoutingModule { }
