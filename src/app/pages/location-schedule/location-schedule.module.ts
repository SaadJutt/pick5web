import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationScheduleComponent } from './location-schedule.component';
import { LocationScheduleRoutingModule } from './location-schedule-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationScheduleRoutingModule
  ],
  declarations: [LocationScheduleComponent],
  exports: [RouterModule]
})
export class LocationScheduleModule { }
