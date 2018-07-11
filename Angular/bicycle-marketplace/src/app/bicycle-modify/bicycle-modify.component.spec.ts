import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleModifyComponent } from './bicycle-modify.component';

describe('BicycleModifyComponent', () => {
  let component: BicycleModifyComponent;
  let fixture: ComponentFixture<BicycleModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicycleModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
