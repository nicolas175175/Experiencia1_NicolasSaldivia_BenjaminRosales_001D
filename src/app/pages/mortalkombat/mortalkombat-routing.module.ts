import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortalkombatPage } from './mortalkombat.page';

const routes: Routes = [
  {
    path: '',
    component: MortalkombatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortalkombatPageRoutingModule {}
