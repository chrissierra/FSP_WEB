import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUaComponent } from './navbar-ua.component';

describe('NavbarUaComponent', () => {
  let component: NavbarUaComponent;
  let fixture: ComponentFixture<NavbarUaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
