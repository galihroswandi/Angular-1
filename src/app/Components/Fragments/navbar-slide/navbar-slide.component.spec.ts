import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSlideComponent } from './navbar-slide.component';

describe('NavbarSlideComponent', () => {
  let component: NavbarSlideComponent;
  let fixture: ComponentFixture<NavbarSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSlideComponent]
    });
    fixture = TestBed.createComponent(NavbarSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
