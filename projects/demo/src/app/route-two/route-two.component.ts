import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss']
})
export class RouteTwoComponent implements OnInit, OnDestroy {

  constructor() { }

  public ngOnInit(): void {
    console.debug('RouteTwoComponent', 'inited');
  }

  public ngOnDestroy(): void {
    console.debug('RouteTwoComponent', 'destroyed');
  }

}
