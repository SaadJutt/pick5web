import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ByBandRoutingModule } from './by-band-routing.module';
import { ByBandComponent } from './by-band.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByBandRoutingModule
  ],
  declarations: [ByBandComponent],
  exports: [RouterModule]
})
export class ByBandModule { }
