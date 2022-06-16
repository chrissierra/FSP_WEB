import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasTarjetaComponent } from './caracteristicas-tarjeta.component';

describe('CaracteristicasTarjetaComponent', () => {
  let component: CaracteristicasTarjetaComponent;
  let fixture: ComponentFixture<CaracteristicasTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicasTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
