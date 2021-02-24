import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkingCommitteePage } from './working-committee.page';

const routes: Routes = [
  {
    path: '',
    component: WorkingCommitteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkingCommitteePageRoutingModule {}
