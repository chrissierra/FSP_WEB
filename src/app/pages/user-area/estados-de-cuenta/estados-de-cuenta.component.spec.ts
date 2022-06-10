import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDeCuentaComponent } from './estados-de-cuenta.component';

describe('EstadosDeCuentaComponent', () => {
  let component: EstadosDeCuentaComponent;
  let fixture: ComponentFixture<EstadosDeCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosDeCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosDeCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
