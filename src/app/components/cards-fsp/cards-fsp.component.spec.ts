import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFspComponent } from './cards-fsp.component';

describe('CardsFspComponent', () => {
  let component: CardsFspComponent;
  let fixture: ComponentFixture<CardsFspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsFspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsFspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
