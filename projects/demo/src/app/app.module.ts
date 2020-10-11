import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCacheRouteReuseModule } from 'ng-cache-route-reuse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';

@NgModule({
  declarations: [AppComponent, RouteOneComponent, RouteTwoComponent],
  imports: [BrowserModule, AppRoutingModule, NgCacheRouteReuseModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
