import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPendidikanComponent } from './input-pendidikan.component';

describe('InputPendidikanComponent', () => {
  let component: InputPendidikanComponent;
  let fixture: ComponentFixture<InputPendidikanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputPendidikanComponent]
    });
    fixture = TestBed.createComponent(InputPendidikanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
