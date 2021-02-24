import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherStuffPageRoutingModule } from './other-stuff-routing.module';

import { OtherStuffPage } from './other-stuff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherStuffPageRoutingModule
  ],
  declarations: [OtherStuffPage]
})
export class OtherStuffPageModule {}
