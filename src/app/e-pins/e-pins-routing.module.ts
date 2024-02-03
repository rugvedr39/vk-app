import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EPinsPage } from './e-pins.page';

const routes: Routes = [
  {
    path: '',
    component: EPinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EPinsPageRoutingModule {}
