import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLightFspComponent } from './button-light-fsp.component';

describe('ButtonLightFspComponent', () => {
  let component: ButtonLightFspComponent;
  let fixture: ComponentFixture<ButtonLightFspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLightFspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLightFspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
