import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NonTeachingPageRoutingModule } from "./non-teaching-routing.module";

import { NonTeachingPage } from "./non-teaching.page";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    NonTeachingPageRoutingModule,
  ],
  declarations: [NonTeachingPage],
})
export class NonTeachingPageModule {}
