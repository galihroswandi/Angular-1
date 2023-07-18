import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerenderComponent } from './rerender.component';

describe('RerenderComponent', () => {
  let component: RerenderComponent;
  let fixture: ComponentFixture<RerenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RerenderComponent]
    });
    fixture = TestBed.createComponent(RerenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
