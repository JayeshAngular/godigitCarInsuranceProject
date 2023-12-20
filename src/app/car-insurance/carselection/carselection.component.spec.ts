import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarselectionComponent } from './carselection.component';

describe('CarselectionComponent', () => {
  let component: CarselectionComponent;
  let fixture: ComponentFixture<CarselectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarselectionComponent]
    });
    fixture = TestBed.createComponent(CarselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
