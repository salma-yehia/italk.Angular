import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentSuccessModelComponent } from './enrollment-success-model.component';

describe('EnrollmentSuccessModelComponent', () => {
  let component: EnrollmentSuccessModelComponent;
  let fixture: ComponentFixture<EnrollmentSuccessModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentSuccessModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentSuccessModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
