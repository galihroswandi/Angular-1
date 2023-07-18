import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIdentitasComponent } from './input-identitas.component';

describe('InputIdentitasComponent', () => {
  let component: InputIdentitasComponent;
  let fixture: ComponentFixture<InputIdentitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputIdentitasComponent]
    });
    fixture = TestBed.createComponent(InputIdentitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
