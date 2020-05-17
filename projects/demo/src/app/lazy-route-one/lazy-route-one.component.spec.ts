import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyRouteOneComponent } from './lazy-route-one.component';

describe('LazyRouteOneComponent', () => {
  let component: LazyRouteOneComponent;
  let fixture: ComponentFixture<LazyRouteOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyRouteOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyRouteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
