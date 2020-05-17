import { Injectable, Type } from '@angular/core';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { NgCacheRouteReuseStore } from './ng-cache-route-reuse-store';

@Injectable({
  providedIn: 'root'
})
export class NgCacheRouteReuseService {

  private readonly cacheRouteReuseStore: NgCacheRouteReuseStore;

  constructor() {
    this.cacheRouteReuseStore = new NgCacheRouteReuseStore();
  }

  public onAttach(component: string | Type<any>): Observable<string | Type<any>> {
    return this.cacheRouteReuseStore.remove$.pipe(
      filter(comp => comp === component),
    );
  }

  public onDetach(component: string | Type<any>): Observable<string | Type<any>> {
    return this.cacheRouteReuseStore.add$.pipe(
      filter(comp => comp === component),
    );
  }

  public isAttached(component: string | Type<any>): boolean {
    return !this.cacheRouteReuseStore.has(component);
  }

  public isDetached(component: string | Type<any>): boolean {
    return this.cacheRouteReuseStore.has(component);
  }

}
