import { NgCacheRouteReuseStore } from './ng-cache-route-reuse-store';

import { filter } from 'rxjs/operators';

export function onAttach() {
  // tslint:disable-next-line: only-arrow-functions
  return function(
    target: any,
    propertyKey: string
  ) {
    const cacheRouteReuseStore = new NgCacheRouteReuseStore();

    cacheRouteReuseStore.remove$.pipe(
      filter(component => component === target.constructor)
    ).subscribe(() => target[propertyKey]());
  };
}

export function onDetach() {
  // tslint:disable-next-line: only-arrow-functions
  return function(
    target: any,
    propertyKey: string
  ) {
    const cacheRouteReuseStore = new NgCacheRouteReuseStore();

    cacheRouteReuseStore.add$.pipe(
      filter(component => component === target.constructor)
    ).subscribe(() => target[propertyKey]());
  };
}
