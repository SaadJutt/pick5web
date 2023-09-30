import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayingHistoryComponent } from './playing-history.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlayingHistoryRoutingModule } from './playing-history-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayingHistoryRoutingModule
  ],
  declarations: [PlayingHistoryComponent]
})
export class PlayingHistoryModule { }
