import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggerCardComponent } from './bigger-card.component';

describe('BiggerCardComponent', () => {
  let component: BiggerCardComponent;
  let fixture: ComponentFixture<BiggerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiggerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiggerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
