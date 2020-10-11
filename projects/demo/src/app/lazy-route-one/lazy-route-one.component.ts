import { Component, OnInit, OnDestroy } from '@angular/core';

import { onAttach, onDetach } from 'ng-cache-route-reuse';

@Component({
  selector: 'app-lazy-route-one',
  templateUrl: './lazy-route-one.component.html',
  styleUrls: ['./lazy-route-one.component.scss'],
})
export class LazyRouteOneComponent implements OnInit, OnDestroy {
  constructor() {}

  @onAttach()
  public onAttach(): void {
    // tslint:disable-next-line: no-console
    console.debug('LazyRouteOneComponent', 'attached');
  }

  @onDetach()
  public onDetach(): void {
    // tslint:disable-next-line: no-console
    console.debug('LazyRouteOneComponent', 'detached');
  }

  public ngOnInit(): void {
    // tslint:disable-next-line: no-console
    console.debug('LazyRouteOneComponent', 'inited');
  }

  public ngOnDestroy(): void {
    // tslint:disable-next-line: no-console
    console.debug('LazyRouteOneComponent', 'destroyed');
  }
}
