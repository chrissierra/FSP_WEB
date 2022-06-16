import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresDePagoComponent } from './lugares-de-pago.component';

describe('LugaresDePagoComponent', () => {
  let component: LugaresDePagoComponent;
  let fixture: ComponentFixture<LugaresDePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresDePagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresDePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
