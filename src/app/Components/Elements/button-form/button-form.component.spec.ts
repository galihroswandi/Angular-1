import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFormComponent } from './button-form.component';

describe('ButtonFormComponent', () => {
  let component: ButtonFormComponent;
  let fixture: ComponentFixture<ButtonFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonFormComponent]
    });
    fixture = TestBed.createComponent(ButtonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
