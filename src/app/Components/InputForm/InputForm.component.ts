import { Component, Input } from '@angular/core';

@Component({
  selector: 'Input-form',
  templateUrl: './InputForm.component.html',
})
export class InputForm {
  @Input() name: string = 'none';
  @Input() type: string = 'text';
  @Input() placeholder: string = 'none';
}
