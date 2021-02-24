import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LocalCommitteePageRoutingModule } from "./local-committee-routing.module";

import { LocalCommitteePage } from "./local-committee.page";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    LocalCommitteePageRoutingModule,
  ],
  declarations: [LocalCommitteePage],
})
export class LocalCommitteePageModule {}
