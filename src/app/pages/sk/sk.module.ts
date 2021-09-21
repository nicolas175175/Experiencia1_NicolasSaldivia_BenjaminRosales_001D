import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkPageRoutingModule } from './sk-routing.module';

import { SkPage } from './sk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkPageRoutingModule
  ],
  declarations: [SkPage]
})
export class SkPageModule {}
