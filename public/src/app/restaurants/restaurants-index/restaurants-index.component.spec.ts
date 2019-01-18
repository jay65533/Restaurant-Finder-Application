import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsIndexComponent } from './restaurants-index.component';

describe('RestaurantsIndexComponent', () => {
  let component: RestaurantsIndexComponent;
  let fixture: ComponentFixture<RestaurantsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
