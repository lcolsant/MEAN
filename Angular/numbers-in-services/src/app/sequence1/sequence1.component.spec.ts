import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sequence1Component } from './sequence1.component';

describe('Sequence1Component', () => {
  let component: Sequence1Component;
  let fixture: ComponentFixture<Sequence1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sequence1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sequence1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
