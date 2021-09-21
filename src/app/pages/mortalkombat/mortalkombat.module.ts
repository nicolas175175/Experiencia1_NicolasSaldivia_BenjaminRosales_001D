import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MortalkombatPageRoutingModule } from './mortalkombat-routing.module';

import { MortalkombatPage } from './mortalkombat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MortalkombatPageRoutingModule
  ],
  declarations: [MortalkombatPage]
})
export class MortalkombatPageModule {}
