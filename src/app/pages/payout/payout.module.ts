import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayoutRoutingModule } from './payout-routing.module';
import { PayoutComponent } from './payout.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayoutRoutingModule
  ],
  declarations: [PayoutComponent]
})
export class PayoutModule { }
