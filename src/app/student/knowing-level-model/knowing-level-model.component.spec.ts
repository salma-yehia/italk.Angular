import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowingLevelModelComponent } from './knowing-level-model.component';

describe('KnowingLevelModelComponent', () => {
  let component: KnowingLevelModelComponent;
  let fixture: ComponentFixture<KnowingLevelModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowingLevelModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowingLevelModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
