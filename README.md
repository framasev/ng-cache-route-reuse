# Angular Cache Route Reuse Strategy

A simple angular route reuse strategy with attach/detach hooks.

## Getting Started

**Installation:**

`npm install ng-cache-route-reuse --save`

Import **`NgCacheRouteReuseModule`** into `AppModule`:

```typescript
import { NgCacheRouteReuseModule } from 'ng-cache-route-reuse';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCacheRouteReuseModule,
    ...
})
export class AppModule { }
```

Set **`reuse:true`** in route's data to enable route reuse:

```typescript
const routes: Routes = [
  ...
  {
    path: 'home',
    component: HomeComponent,
    data: {
      reuse: true
    },
  },
  ...
];
```

## Attach/Detach Hooks

You can use hooks for performing additional subscribe/unsubscribe functionality:

```typescript
import { NgCacheRouteReuseService } from 'ng-cache-route-reuse';

@Component({})
export class HomeComponent implements OnInit {
  constructor(private cacheRouteReuseService: NgCacheRouteReuseService) {}

  public ngOnInit(): void {
    this.cacheRouteReuseService
      .onAttach(HomeComponent) // or any reuse route's component
      .subscribe((component) => {
        // code...
      });

    this.cacheRouteReuseService
      .onDetach(HomeComponent) // or any reuse route's component
      .subscribe((component) => {
        // code...
      });
  }
}
```
