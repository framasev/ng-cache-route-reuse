import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { NgCacheRouteReuseStrategy } from './ng-cache-route-reuse.strategy';


@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: NgCacheRouteReuseStrategy
    }
  ]
})
export class NgCacheRouteReuseModule {}
