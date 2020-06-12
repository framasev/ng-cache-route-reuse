import { Type } from '@angular/core';
import { DetachedRouteHandle } from '@angular/router';

import { Subject } from 'rxjs';

let instance: NgCacheRouteReuseStore = null;

export class NgCacheRouteReuseStore {

  private readonly store: Map<string | Type<any>, DetachedRouteHandle>;

  public readonly add$: Subject<string | Type<any>>;
  public readonly remove$: Subject<string | Type<any>>;

  constructor() {
    if (instance) return instance;

    this.store = new Map();
    this.add$ = new Subject();
    this.remove$ = new Subject();

    instance = this;
  }

  public add(component: string | Type<any>, handle: DetachedRouteHandle): void {
    this.store.set(component, handle);
    this.add$.next(component);
  }

  public remove(component: string | Type<any>): void {
    this.store.delete(component);
    this.remove$.next(component);
  }

  public get(component: string | Type<any>): DetachedRouteHandle | null {
    return this.store.get(component);
  }

  public has(component: string | Type<any>): boolean {
    return this.store.has(component);
  }

  public clear(): void {
    this.store.clear();
  }

}
