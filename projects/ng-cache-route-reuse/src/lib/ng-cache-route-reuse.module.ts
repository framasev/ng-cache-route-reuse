import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { NgCacheRouteReuseStoreService } from './ng-cache-route-reuse-store.service';
import { NgCacheRouteReuseService } from './ng-cache-route-reuse.service';
import { NgCacheRouteReuseStrategy } from './ng-cache-route-reuse.strategy';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: NgCacheRouteReuseStoreService,
      useFactory: NgCacheRouteReuseStoreService.getInstance,
    },
    {
      provide: NgCacheRouteReuseService,
      useFactory: NgCacheRouteReuseService.getInstance,
    },
    {
      provide: RouteReuseStrategy,
      useClass: NgCacheRouteReuseStrategy,
    },
  ],
})
export class NgCacheRouteReuseModule {}
