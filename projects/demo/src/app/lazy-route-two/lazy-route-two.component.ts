import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lazy-route-two',
  templateUrl: './lazy-route-two.component.html',
  styleUrls: ['./lazy-route-two.component.scss']
})
export class LazyRouteTwoComponent implements OnInit, OnDestroy {

  constructor() { }

  public ngOnInit(): void {
    console.debug('LazyRouteTwoComponent', 'inited');
  }

  public ngOnDestroy(): void {
    console.debug('LazyRouteTwoComponent', 'destroyed');
  }

}
