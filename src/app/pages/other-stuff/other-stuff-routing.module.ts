import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherStuffPage } from './other-stuff.page';

const routes: Routes = [
  {
    path: '',
    component: OtherStuffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherStuffPageRoutingModule {}
