import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarientselectionComponent } from './varientselection.component';

describe('VarientselectionComponent', () => {
  let component: VarientselectionComponent;
  let fixture: ComponentFixture<VarientselectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VarientselectionComponent]
    });
    fixture = TestBed.createComponent(VarientselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
