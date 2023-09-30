import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayingHistoryRoutingModule } from './paying-history-routing.module';
import { PayingHistoryComponent } from './paying-history.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayingHistoryRoutingModule  
  ],
  declarations: [PayingHistoryComponent]
})
export class PayingHistoryModule { }
