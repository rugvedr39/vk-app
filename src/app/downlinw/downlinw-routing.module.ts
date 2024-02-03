import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownlinwPage } from './downlinw.page';

const routes: Routes = [
  {
    path: '',
    component: DownlinwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownlinwPageRoutingModule {}
