import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAvanceComponent } from './informacion-avance.component';

describe('InformacionAvanceComponent', () => {
  let component: InformacionAvanceComponent;
  let fixture: ComponentFixture<InformacionAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
