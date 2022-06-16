import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuerteAccidentalComponent } from './muerte-accidental.component';

describe('MuerteAccidentalComponent', () => {
  let component: MuerteAccidentalComponent;
  let fixture: ComponentFixture<MuerteAccidentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuerteAccidentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuerteAccidentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
