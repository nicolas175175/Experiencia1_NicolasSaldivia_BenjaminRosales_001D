import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkPage } from './sk.page';

const routes: Routes = [
  {
    path: '',
    component: SkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkPageRoutingModule {}
