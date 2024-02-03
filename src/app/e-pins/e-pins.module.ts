import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EPinsPageRoutingModule } from './e-pins-routing.module';

import { EPinsPage } from './e-pins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EPinsPageRoutingModule
  ],
  declarations: [EPinsPage]
})
export class EPinsPageModule {}
