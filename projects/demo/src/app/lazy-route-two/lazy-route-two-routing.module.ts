import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyRouteTwoComponent } from './lazy-route-two.component';

const routes: Routes = [
  {
    path: '',
    component: LazyRouteTwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRouteTwoRoutingModule {}
