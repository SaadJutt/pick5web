import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlayingHistoryModalModule } from '../playing-history-modal/playing-history-modal.module';
import { PayingHistoryModalModule } from '../paying-history-modal/paying-history-modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileRoutingModule,
    PlayingHistoryModalModule,
    PayingHistoryModalModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
