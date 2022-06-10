import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUaComponent } from './header-ua.component';

describe('HeaderUaComponent', () => {
  let component: HeaderUaComponent;
  let fixture: ComponentFixture<HeaderUaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
