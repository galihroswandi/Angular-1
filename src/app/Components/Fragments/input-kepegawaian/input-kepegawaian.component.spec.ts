import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputKepegawaianComponent } from './input-kepegawaian.component';

describe('InputKepegawaianComponent', () => {
  let component: InputKepegawaianComponent;
  let fixture: ComponentFixture<InputKepegawaianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputKepegawaianComponent]
    });
    fixture = TestBed.createComponent(InputKepegawaianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
