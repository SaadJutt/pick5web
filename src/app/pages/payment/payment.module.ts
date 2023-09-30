import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutungModule } from './payment-routung.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentComponent } from './payment.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentRoutungModule
  ],
  declarations: [PaymentComponent]
})
export class PaymentModule { }
