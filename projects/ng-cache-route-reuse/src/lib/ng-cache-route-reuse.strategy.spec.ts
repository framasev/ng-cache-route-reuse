import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  ActivatedRoute,
  Route,
  RouteReuseStrategy,
  Router,
} from '@angular/router';
import { NgCacheRouteReuseService } from 'ng-cache-route-reuse';
import {
  routes as AppRoutes,
  AppRoutingModule,
} from 'projects/demo/src/app/app-routing.module';
import { AppComponent } from 'projects/demo/src/app/app.component';
import { routes as LazyRouteOneRoutes } from 'projects/demo/src/app/lazy-route-one/lazy-route-one-routing.module';

import { NgCacheRouteReuseStoreService } from './ng-cache-route-reuse-store.service';
import { NgCacheRouteReuseModule } from './ng-cache-route-reuse.module';

const testRouteReuse = (config: {
  route: Route;
  routeUrl: string;
  urls: string[];
}) => {
  describe(`route with url '${config.routeUrl}'`, () => {
    let router: Router = null;
    let fixture: ComponentFixture<AppComponent> = null;
    let strategy: RouteReuseStrategy = null;
    let store: NgCacheRouteReuseStoreService = null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [AppRoutingModule, NgCacheRouteReuseModule],
        declarations: [AppComponent],
        providers: [
          {
            provide: NgCacheRouteReuseStoreService,
            useFactory: NgCacheRouteReuseStoreService.getInstance,
          },
          {
            provide: NgCacheRouteReuseService,
            useFactory: NgCacheRouteReuseService.getInstance,
          },
        ],
      });

      router = TestBed.inject(Router);
      fixture = TestBed.createComponent(AppComponent);
      strategy = TestBed.inject(RouteReuseStrategy);
      store = NgCacheRouteReuseStoreService.getInstance();

      store.clear();
      router.initialNavigation();
    });

    it('should be reused', () => {
      expect(config.route.data.reuse).toBe(true);
    });

    config.urls.forEach((url) => {
      describe(`should be detached after '${config.routeUrl} -> ${url}' navigation`, async () => {
        let shouldDetachSpy: jasmine.Spy;

        beforeEach(async () => {
          shouldDetachSpy = spyOn(strategy, `shouldDetach`).and.callThrough();

          await router.navigateByUrl(config.routeUrl);
          await router.navigateByUrl(url);
        });

        it(`store should have the detached route`, () => {
          expect(store.has(config.route.component)).toBeTrue();
        });

        it(`'shouldDetach' should return 'true'`, () => {
          expect(shouldDetachSpy.calls.mostRecent().returnValue).toBeTrue();
        });
      });
    });

    config.urls.forEach((url) => {
      describe(`should be attached after '${config.routeUrl} -> ${url}' navigation`, () => {
        let shouldAttachSpy: jasmine.Spy;
        let startRoute: ActivatedRoute;
        let endRoute: ActivatedRoute;

        beforeEach(async () => {
          shouldAttachSpy = spyOn(strategy, `shouldAttach`).and.callThrough();

          await router.navigateByUrl(config.routeUrl);

          startRoute = fixture.debugElement
            .query(By.directive(config.route.component))
            .injector.get(ActivatedRoute);

          await router.navigateByUrl(url);
          await router.navigateByUrl(config.routeUrl);

          endRoute = fixture.debugElement
            .query(By.directive(config.route.component))
            .injector.get(ActivatedRoute);
        });

        it(`the store should not have the attached route`, () => {
          expect(store.has(config.route.component)).toBeFalse();
        });

        it(`the strategy 'souldAttach' should return 'true'`, () => {
          expect(shouldAttachSpy.calls.mostRecent().returnValue).toBeTrue();
        });

        it(`'ActivatedRoute' should be the same`, () => {
          expect(startRoute).toBe(endRoute);
        });
      });
    });
  });
};

describe('NgCacheRouteReuseStrategy', () => {
  testRouteReuse({
    route: AppRoutes[0],
    routeUrl: 'one',
    urls: ['two', 'lazy-one', 'lazy-two'],
  });

  testRouteReuse({
    route: LazyRouteOneRoutes[0],
    routeUrl: 'lazy-one',
    urls: ['one', 'two', 'lazy-two'],
  });
});
