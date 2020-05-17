import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';


const routes: Routes = [
  {
    path: 'one',
    component: RouteOneComponent
  },
  {
    path: 'two',
    component: RouteTwoComponent
  },
  {
    path: 'lazy-one',
    loadChildren: () => import('./lazy-route-one/lazy-route-one.module').then(m => m.LazyRouteOneModule)
  },
  {
    path: 'lazy-two',
    loadChildren: () => import('./lazy-route-two/lazy-route-two.module').then(m => m.LazyRouteTwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
