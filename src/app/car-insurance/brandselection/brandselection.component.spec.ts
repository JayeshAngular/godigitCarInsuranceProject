import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandselectionComponent } from './brandselection.component';

describe('BrandselectionComponent', () => {
  let component: BrandselectionComponent;
  let fixture: ComponentFixture<BrandselectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandselectionComponent]
    });
    fixture = TestBed.createComponent(BrandselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
