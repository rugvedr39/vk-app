import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EMIPageRoutingModule } from './emi-routing.module';

import { EMIPage } from './emi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EMIPageRoutingModule
  ],
  declarations: [EMIPage]
})
export class EMIPageModule {}
