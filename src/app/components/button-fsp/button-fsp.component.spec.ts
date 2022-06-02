import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFspComponent } from './button-fsp.component';

describe('ButtonFspComponent', () => {
  let component: ButtonFspComponent;
  let fixture: ComponentFixture<ButtonFspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
