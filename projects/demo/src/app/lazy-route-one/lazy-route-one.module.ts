import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazyRouteOneRoutingModule } from './lazy-route-one-routing.module';
import { LazyRouteOneComponent } from './lazy-route-one.component';

@NgModule({
  declarations: [LazyRouteOneComponent],
  imports: [CommonModule, LazyRouteOneRoutingModule],
})
export class LazyRouteOneModule {}
