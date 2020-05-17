import { Component, OnInit, OnDestroy } from '@angular/core';

import { onAttach, onDetach } from 'ng-cache-route-reuse';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.scss']
})
export class RouteOneComponent implements OnInit, OnDestroy {

  constructor() { }

  @onAttach()
  public onAttach(): void {
    console.debug('RouteOneComponent', 'attached');
  }

  @onDetach()
  public onDetach(): void {
    console.debug('RouteOneComponent', 'detached');
  }

  public ngOnInit(): void {
    console.debug('RouteOneComponent', 'inited');
  }

  public ngOnDestroy(): void {
    console.debug('RouteOneComponent', 'destroyed');
  }

}
