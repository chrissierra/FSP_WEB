import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAvanceComponent } from './super-avance.component';

describe('SuperAvanceComponent', () => {
  let component: SuperAvanceComponent;
  let fixture: ComponentFixture<SuperAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
