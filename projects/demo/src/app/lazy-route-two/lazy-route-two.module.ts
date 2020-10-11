import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRouteTwoRoutingModule } from './lazy-route-two-routing.module';
import { LazyRouteTwoComponent } from './lazy-route-two.component';

@NgModule({
  declarations: [LazyRouteTwoComponent],
  imports: [CommonModule, LazyRouteTwoRoutingModule],
})
export class LazyRouteTwoModule {}
