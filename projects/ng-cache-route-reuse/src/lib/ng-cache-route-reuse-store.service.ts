import { Injectable, Type } from '@angular/core';
import { DetachedRouteHandle } from '@angular/router';

import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export enum StoreAction { Set, Delete }
export type StoreActionDef = { type: StoreAction, component: string | Type<any> };

@Injectable()
export class NgCacheRouteReuseStoreService extends Map<string | Type<any>, DetachedRouteHandle> {
  private static instance: NgCacheRouteReuseStoreService = null;
  private readonly action$: Subject<StoreActionDef>;

  constructor() {
    super();
    this.action$ = new Subject();
  }

  public static getInstance(): NgCacheRouteReuseStoreService {
    if (!NgCacheRouteReuseStoreService.instance) {
      const instance = new NgCacheRouteReuseStoreService();

      NgCacheRouteReuseStoreService.instance = instance;
    }

    return NgCacheRouteReuseStoreService.instance;
  }

  private dispatch(type: StoreAction, component: string | Type<any>): void {
    this.action$.next({ type, component });
  }

  public on(type: StoreAction, component: string | Type<any>): Observable<string | Type<any>> {
    return this.action$.pipe(
      filter(action => action.type === type),
      filter(action => action.component === component),
      map(action => action.component)
    );
  }

  public set(component: string | Type<any>, handle: DetachedRouteHandle): this {
    super.set(component, handle);
    this.dispatch(StoreAction.Set, component);
    return this;
  }

  public delete(component: string | Type<any>): boolean {
    const removed = super.delete(component);
    if (removed) { this.dispatch(StoreAction.Delete, component); }
    return removed;
  }
}
