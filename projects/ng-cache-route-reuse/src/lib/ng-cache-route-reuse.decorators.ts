import { NgCacheRouteReuseService } from './ng-cache-route-reuse.service';

export function onAttach() {
  // tslint:disable-next-line: only-arrow-functions
  return function(
    target: any,
    propertyKey: string
  ) {
    const service = NgCacheRouteReuseService.getInstance();
    const component = target.constructor;

    service.onAttach(component).subscribe(() => target[propertyKey]());
  };
}

export function onDetach() {
  // tslint:disable-next-line: only-arrow-functions
  return function(
    target: any,
    propertyKey: string
  ) {
    const service = NgCacheRouteReuseService.getInstance();
    const component = target.constructor;

    service.onDetach(component).subscribe(() => target[propertyKey]());
  };
}
