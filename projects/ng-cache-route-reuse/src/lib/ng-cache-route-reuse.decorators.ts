import { NgCacheRouteReuseService } from './ng-cache-route-reuse.service';

/**
 * Decorator variant of `onAttach` reuse route's component lifecycle hook
 * @deprecated from 0.0.7, may be removed in 0.0.9, use `NgCacheRouteReuseService` instead
 */
export function onAttach() {
  // tslint:disable-next-line: only-arrow-functions
  return function (target: any, propertyKey: string) {
    const service = NgCacheRouteReuseService.getInstance();
    const component = target.constructor;

    service.onAttach(component).subscribe(() => target[propertyKey]());
  };
}

/**
 * Decorator variant of `onAttach` reuse route's component lifecycle hook
 * @deprecated from 0.0.7, may be removed in 0.0.9, use `NgCacheRouteReuseService` instead
 */
export function onDetach() {
  // tslint:disable-next-line: only-arrow-functions
  return function (target: any, propertyKey: string) {
    const service = NgCacheRouteReuseService.getInstance();
    const component = target.constructor;

    service.onDetach(component).subscribe(() => target[propertyKey]());
  };
}
