import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from '@angular/router';

import { NgCacheRouteReuseStore } from './ng-cache-route-reuse-store';

export class NgCacheRouteReuseStrategy implements RouteReuseStrategy {

  private readonly cacheRouteReuseStore: NgCacheRouteReuseStore;

  constructor() {
    this.cacheRouteReuseStore = new NgCacheRouteReuseStore();
  }

  private shouldBeReused(route: ActivatedRouteSnapshot): boolean {
    return !!route.data.reuse;
  }

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.shouldBeReused(route);
  }

  public store(
    route: ActivatedRouteSnapshot,
    detachedRouteHandle: DetachedRouteHandle
  ): void {
    detachedRouteHandle
      ? this.cacheRouteReuseStore.add(route.component, detachedRouteHandle)
      : this.cacheRouteReuseStore.remove(route.component);
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.shouldBeReused(route)
      ? this.cacheRouteReuseStore.has(route.component)
      : false;
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.shouldBeReused(route)
      ? this.cacheRouteReuseStore.get(route.component)
      : null;
  }

  public shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig === curr.routeConfig;
  }

}
