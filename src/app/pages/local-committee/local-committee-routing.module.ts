import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalCommitteePage } from './local-committee.page';

const routes: Routes = [
  {
    path: '',
    component: LocalCommitteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalCommitteePageRoutingModule {}
