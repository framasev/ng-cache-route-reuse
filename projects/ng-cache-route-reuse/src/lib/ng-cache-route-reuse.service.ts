import { Injectable, Type } from '@angular/core';

import { Observable } from 'rxjs';

import { NgCacheRouteReuseStoreService, StoreAction } from './ng-cache-route-reuse-store.service';

@Injectable()
export class NgCacheRouteReuseService {
  private static instance: NgCacheRouteReuseService = null;

  constructor(private storeService: NgCacheRouteReuseStoreService) {}

  public static getInstance(): NgCacheRouteReuseService {
    if (!NgCacheRouteReuseService.instance) {
      const storeService = NgCacheRouteReuseStoreService.getInstance();
      const instance = new NgCacheRouteReuseService(storeService);

      NgCacheRouteReuseService.instance = instance;
    }

    return NgCacheRouteReuseService.instance;
  }

  public onAttach(component: string | Type<any>): Observable<string | Type<any>> {
    return this.storeService.on(StoreAction.Delete, component);
  }

  public onDetach(component: string | Type<any>): Observable<string | Type<any>> {
    return this.storeService.on(StoreAction.Set, component);
  }

  public isAttached(component: string | Type<any>): boolean {
    return !this.storeService.has(component);
  }

  public isDetached(component: string | Type<any>): boolean {
    return this.storeService.has(component);
  }
}
