import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentFailurModelComponent } from './enrollment-failur-model.component';

describe('EnrollmentFailurModelComponent', () => {
  let component: EnrollmentFailurModelComponent;
  let fixture: ComponentFixture<EnrollmentFailurModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentFailurModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentFailurModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
