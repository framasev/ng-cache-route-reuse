import { Injectable, Type } from '@angular/core';
import { DetachedRouteHandle } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export enum StoreActionType {
  Set,
  Delete,
  Clear,
}

export interface StoreAction {
  type: StoreActionType;
  component?: string | Type<any>;
}

export interface StoreActionOptions {
  emitEvent?: boolean;
}

@Injectable()
export class NgCacheRouteReuseStoreService {
  private static instance: NgCacheRouteReuseStoreService = null;

  private readonly detachedRouteHandles: Map<
    string | Type<any>,
    DetachedRouteHandle
  >;
  private readonly action$: Subject<StoreAction>;

  constructor() {
    this.detachedRouteHandles = new Map();
    this.action$ = new Subject();
  }

  public static getInstance(): NgCacheRouteReuseStoreService {
    if (!NgCacheRouteReuseStoreService.instance) {
      const instance = new NgCacheRouteReuseStoreService();

      NgCacheRouteReuseStoreService.instance = instance;
    }

    return NgCacheRouteReuseStoreService.instance;
  }

  private dispatch(
    type: StoreActionType,
    component: string | Type<any> = null
  ): void {
    this.action$.next({ type, component });
  }

  public on(
    type: StoreActionType,
    component: string | Type<any>
  ): Observable<string | Type<any>> {
    return this.action$.pipe(
      filter((action) => action.type === type),
      filter((action) => action.component === component),
      map((action) => action.component)
    );
  }

  public set(
    component: string | Type<any>,
    handle: DetachedRouteHandle,
    { emitEvent = true }: StoreActionOptions = {}
  ): void {
    this.detachedRouteHandles.set(component, handle);

    if (emitEvent) {
      this.dispatch(StoreActionType.Set, component);
    }
  }

  public get(component: string | Type<any>): DetachedRouteHandle {
    return this.detachedRouteHandles.get(component);
  }

  public has(component: string | Type<any>): boolean {
    return this.detachedRouteHandles.has(component);
  }

  public delete(
    component: string | Type<any>,
    { emitEvent = true }: StoreActionOptions = {}
  ): boolean {
    const deleted = this.detachedRouteHandles.delete(component);

    if (emitEvent && deleted) {
      this.dispatch(StoreActionType.Delete, component);
    }

    return deleted;
  }

  public clear({ emitEvent = true }: StoreActionOptions = {}): void {
    this.detachedRouteHandles.clear();

    if (emitEvent) {
      this.dispatch(StoreActionType.Clear);
    }
  }
}
