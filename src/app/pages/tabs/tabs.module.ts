import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
