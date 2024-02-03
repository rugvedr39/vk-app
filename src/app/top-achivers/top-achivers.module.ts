import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopAchiversPageRoutingModule } from './top-achivers-routing.module';

import { TopAchiversPage } from './top-achivers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopAchiversPageRoutingModule
  ],
  declarations: [TopAchiversPage]
})
export class TopAchiversPageModule {}
