import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SongSelectionRoutingModule } from './song-selection-routing.module';
import { RouterModule } from '@angular/router';
import { SongSelectionComponent } from './song-selection.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongSelectionRoutingModule
  ],
  declarations: [SongSelectionComponent],
  exports: [RouterModule]
})
export class SongSelectionModule { }
