import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandListsComponent } from './band-lists.component';
import { BandListsRoutingModule } from './band-lists-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BandListsRoutingModule
  ],
  declarations: [BandListsComponent],
  exports: [RouterModule]
})
export class BandListsModule { }
