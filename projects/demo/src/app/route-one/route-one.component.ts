import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgCacheRouteReuseService } from 'ng-cache-route-reuse';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.scss'],
})
export class RouteOneComponent implements OnInit, OnDestroy {
  constructor(private cacheRouteReuseService: NgCacheRouteReuseService) {
    this.cacheRouteReuseService.onAttach(RouteOneComponent).subscribe(() => {
      // tslint:disable-next-line: no-console
      console.debug('RouteOneComponent', 'attached');
    });

    this.cacheRouteReuseService.onDetach(RouteOneComponent).subscribe(() => {
      // tslint:disable-next-line: no-console
      console.debug('RouteOneComponent', 'detached');
    });
  }

  public ngOnInit(): void {
    // tslint:disable-next-line: no-console
    console.debug('RouteOneComponent', 'inited');
  }

  public ngOnDestroy(): void {
    // tslint:disable-next-line: no-console
    console.debug('RouteOneComponent', 'destroyed');
  }
}
