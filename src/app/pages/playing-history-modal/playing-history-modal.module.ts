import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayingHistoryModalComponent } from './playing-history-modal.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [PlayingHistoryModalComponent],
  exports: [PlayingHistoryModalComponent]
})
export class PlayingHistoryModalModule { }
