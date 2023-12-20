import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthselectionComponent } from './monthselection.component';

describe('MonthselectionComponent', () => {
  let component: MonthselectionComponent;
  let fixture: ComponentFixture<MonthselectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthselectionComponent]
    });
    fixture = TestBed.createComponent(MonthselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
