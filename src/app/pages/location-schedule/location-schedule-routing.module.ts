import { NgModule } from '@angular/core';
import { LocationScheduleComponent } from './location-schedule.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LocationScheduleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class LocationScheduleRoutingModule { }
