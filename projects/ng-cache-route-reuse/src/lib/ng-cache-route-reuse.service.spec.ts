import { TestBed } from '@angular/core/testing';

import { NgCacheRouteReuseService } from './ng-cache-route-reuse.service';

describe('NgCacheRouteReuseService', () => {
  let service: NgCacheRouteReuseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCacheRouteReuseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
