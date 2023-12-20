import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpSubComponent } from './thirdp-sub.component';

describe('ThirdpSubComponent', () => {
  let component: ThirdpSubComponent;
  let fixture: ComponentFixture<ThirdpSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdpSubComponent]
    });
    fixture = TestBed.createComponent(ThirdpSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
