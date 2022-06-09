import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageUaComponent } from './card-image-ua.component';

describe('CardImageUaComponent', () => {
  let component: CardImageUaComponent;
  let fixture: ComponentFixture<CardImageUaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardImageUaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImageUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
