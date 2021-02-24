import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonTeachingPage } from './non-teaching.page';

const routes: Routes = [
  {
    path: '',
    component: NonTeachingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonTeachingPageRoutingModule {}
