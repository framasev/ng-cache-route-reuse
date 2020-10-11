import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyRouteOneComponent } from './lazy-route-one.component';

export const routes: Routes = [
  {
    path: '',
    component: LazyRouteOneComponent,
    data: {
      reuse: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRouteOneRoutingModule {}
