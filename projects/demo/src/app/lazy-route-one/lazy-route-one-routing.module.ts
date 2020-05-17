import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyRouteOneComponent } from './lazy-route-one.component';


const routes: Routes = [
  {
    path: '',
    component: LazyRouteOneComponent,
    data: {
      reuse: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRouteOneRoutingModule { }
