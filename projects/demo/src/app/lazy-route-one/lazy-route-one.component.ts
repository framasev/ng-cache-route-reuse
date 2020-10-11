import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgCacheRouteReuseService } from 'ng-cache-route-reuse';

@Component({
  selector: 'app-lazy-route-one',
  templateUrl: './lazy-route-one.component.html',
  styleUrls: ['./lazy-route-one.component.scss'],
})
export class LazyRouteOneComponent implements OnInit, OnDestroy {
  constructor(private cacheRouteReuseService: NgCacheRouteReuseService) {
    this.cacheRouteReuseService
      .onAttach(LazyRouteOneComponent)
      .subscribe(() => {
        // tslint:disable-next-line: no-console
        console.debug('LazyRouteOneComponent', 'attached');
      });

    this.cacheRouteReuseService
      .onDetach(LazyRouteOneComponent)
      .subscribe(() => {
        // tslint:disable-next-line: no-console
        console.debug('LazyRouteOneComponent', 'detached');
      });
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
