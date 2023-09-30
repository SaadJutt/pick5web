import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayingHistoryModalComponent } from './paying-history-modal.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [PayingHistoryModalComponent],
  exports: [PayingHistoryModalComponent]
})
export class PayingHistoryModalModule { }
