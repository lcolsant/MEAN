import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sequence2Component } from './sequence2.component';

describe('Sequence2Component', () => {
  let component: Sequence2Component;
  let fixture: ComponentFixture<Sequence2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sequence2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sequence2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
