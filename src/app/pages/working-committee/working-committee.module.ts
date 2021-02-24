import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkingCommitteePageRoutingModule } from './working-committee-routing.module';

import { WorkingCommitteePage } from './working-committee.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,Ng2SearchPipeModule, 
    FormsModule,
    IonicModule,
    WorkingCommitteePageRoutingModule
  ],
  declarations: [WorkingCommitteePage]
})
export class WorkingCommitteePageModule {}
