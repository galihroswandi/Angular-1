import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSlideLinkComponent } from './navbar-slide-link.component';

describe('NavbarSlideLinkComponent', () => {
  let component: NavbarSlideLinkComponent;
  let fixture: ComponentFixture<NavbarSlideLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSlideLinkComponent]
    });
    fixture = TestBed.createComponent(NavbarSlideLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
