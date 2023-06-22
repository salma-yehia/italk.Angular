import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAppointmentModelComponent } from './check-appointment-model.component';

describe('CheckAppointmentModelComponent', () => {
  let component: CheckAppointmentModelComponent;
  let fixture: ComponentFixture<CheckAppointmentModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAppointmentModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAppointmentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
