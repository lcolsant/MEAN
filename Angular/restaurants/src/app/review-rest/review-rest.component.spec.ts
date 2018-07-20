import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRestComponent } from './review-rest.component';

describe('ReviewRestComponent', () => {
  let component: ReviewRestComponent;
  let fixture: ComponentFixture<ReviewRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
