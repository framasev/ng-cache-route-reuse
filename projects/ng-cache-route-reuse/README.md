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

### Use with Decorators

```typescript
import { onAttach, onDetach } from 'ng-cache-route-reuse';

@Component({})
export class HomeComponent {
  @onAttach()
  public onAttach(): void {
    // your code...
  }

  @onDetach()
  public onDetach(): void {
    // your code...
  }
}
```

### Use with Service

```typescript
import { NgCacheRouteReuseService } from 'ng-cache-route-reuse';

@Component({})
export class HomeComponent implements OnInit {
  constructor(private cacheRouteReuse: NgCacheRouteReuseService) {}

  public ngOnInit(): void {
    this.cacheRouteReuse.onAttach(HomeComponent).subscribe((component) => {
      // your code...
    });

    this.cacheRouteReuse.onDetach(HomeComponent).subscribe((component) => {
      // your code...
    });
  }
}
```
