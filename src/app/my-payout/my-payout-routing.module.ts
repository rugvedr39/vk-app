import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPayoutPage } from './my-payout.page';

const routes: Routes = [
  {
    path: '',
    component: MyPayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPayoutPageRoutingModule {}
