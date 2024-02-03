import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownlinwPageRoutingModule } from './downlinw-routing.module';

import { DownlinwPage } from './downlinw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownlinwPageRoutingModule
  ],
  declarations: [DownlinwPage]
})
export class DownlinwPageModule {}
