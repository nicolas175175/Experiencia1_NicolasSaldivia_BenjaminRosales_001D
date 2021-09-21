import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MKPageRoutingModule } from './mk-routing.module';

import { MKPage } from './mk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MKPageRoutingModule
  ],
  declarations: [MKPage]
})
export class MKPageModule {}
