import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MKPage } from './mk.page';

const routes: Routes = [
  {
    path: '',
    component: MKPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MKPageRoutingModule {}
