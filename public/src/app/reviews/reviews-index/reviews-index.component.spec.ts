import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsIndexComponent } from './reviews-index.component';

describe('ReviewsIndexComponent', () => {
  let component: ReviewsIndexComponent;
  let fixture: ComponentFixture<ReviewsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
