import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

import { NgCacheRouteReuseStoreService } from './ng-cache-route-reuse-store.service';

@Injectable()
export class NgCacheRouteReuseStrategy implements RouteReuseStrategy {
  constructor(private storeService: NgCacheRouteReuseStoreService) {}

  private shouldBeReused(route: ActivatedRouteSnapshot): boolean {
    return !!route.data.reuse;
  }

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.shouldBeReused(route);
  }

  public store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle
  ): void {
    handle
      ? this.storeService.set(route.component, handle)
      : this.storeService.delete(route.component);
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.shouldBeReused(route)
      ? this.storeService.has(route.component)
      : false;
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.shouldBeReused(route)
      ? this.storeService.get(route.component)
      : null;
  }

  public shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    current: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig === current.routeConfig;
  }
}
