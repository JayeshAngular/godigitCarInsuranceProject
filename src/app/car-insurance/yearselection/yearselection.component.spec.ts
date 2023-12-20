import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearselectionComponent } from './yearselection.component';

describe('YearselectionComponent', () => {
  let component: YearselectionComponent;
  let fixture: ComponentFixture<YearselectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearselectionComponent]
    });
    fixture = TestBed.createComponent(YearselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
