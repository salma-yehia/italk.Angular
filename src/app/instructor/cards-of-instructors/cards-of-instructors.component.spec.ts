import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOfInstructorsComponent } from './cards-of-instructors.component';

describe('CardsOfInstructorsComponent', () => {
  let component: CardsOfInstructorsComponent;
  let fixture: ComponentFixture<CardsOfInstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsOfInstructorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsOfInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
