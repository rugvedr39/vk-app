import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopAchiversPage } from './top-achivers.page';

const routes: Routes = [
  {
    path: '',
    component: TopAchiversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopAchiversPageRoutingModule {}
