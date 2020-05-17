import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyRouteTwoComponent } from './lazy-route-two.component';

describe('LazyRouteTwoComponent', () => {
  let component: LazyRouteTwoComponent;
  let fixture: ComponentFixture<LazyRouteTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyRouteTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyRouteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
