import { NgCacheRouteReuseStore } from './ng-cache-route-reuse-store';

import { filter } from 'rxjs/operators';

export function onAttach() {
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
