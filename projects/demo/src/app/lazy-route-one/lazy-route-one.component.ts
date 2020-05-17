import { Component, OnInit, OnDestroy } from '@angular/core';

import { onAttach, onDetach } from 'ng-cache-route-reuse';

@Component({
  selector: 'app-lazy-route-one',
  templateUrl: './lazy-route-one.component.html',
  styleUrls: ['./lazy-route-one.component.scss']
})
export class LazyRouteOneComponent implements OnInit, OnDestroy {

  constructor() { }

  @onAttach()
  public onAttach(): void {
    console.debug('LazyRouteOneComponent', 'attached');
  }

  @onDetach()
  public onDetach(): void {
    console.debug('LazyRouteOneComponent', 'detached');
  }

  public ngOnInit(): void {
    console.debug('LazyRouteOneComponent', 'inited');
  }

  public ngOnDestroy(): void {
    console.debug('LazyRouteOneComponent', 'destroyed');
  }

}
