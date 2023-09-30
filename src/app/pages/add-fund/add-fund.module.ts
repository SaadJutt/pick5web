import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFundRoutingModule } from './add-fund-routing.module';
import { AddFundComponent } from './add-fund.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFundRoutingModule
  ],
  declarations: [AddFundComponent],
  exports: [RouterModule]
})
export class AddFundModule { }
