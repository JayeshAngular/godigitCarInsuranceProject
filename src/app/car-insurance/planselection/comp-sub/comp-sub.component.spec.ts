import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSubComponent } from './comp-sub.component';

describe('CompSubComponent', () => {
  let component: CompSubComponent;
  let fixture: ComponentFixture<CompSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompSubComponent]
    });
    fixture = TestBed.createComponent(CompSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
