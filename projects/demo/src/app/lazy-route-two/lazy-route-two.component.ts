import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-route-two',
  templateUrl: './lazy-route-two.component.html',
  styleUrls: ['./lazy-route-two.component.scss'],
})
export class LazyRouteTwoComponent implements OnInit, OnDestroy {
  constructor() {}

  public ngOnInit(): void {
    // tslint:disable-next-line: no-console
    console.debug('LazyRouteTwoComponent', 'inited');
  }

  public ngOnDestroy(): void {
    // tslint:disable-next-line: no-console
    console.debug('LazyRouteTwoComponent', 'destroyed');
  }
}
