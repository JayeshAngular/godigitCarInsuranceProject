import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityselectionComponent } from './cityselection.component';

describe('CityselectionComponent', () => {
  let component: CityselectionComponent;
  let fixture: ComponentFixture<CityselectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityselectionComponent]
    });
    fixture = TestBed.createComponent(CityselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
