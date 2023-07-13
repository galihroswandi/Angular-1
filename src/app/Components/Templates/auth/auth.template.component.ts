import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthUtil } from 'src/app/utils/auth.util';

@Component({
  selector: 'app-auth-template',
  templateUrl: './auth.template.component.html',
})
export class AuthComponent {
  @Input() name1 = 'none';
  @Input() name2 = 'none';
  @Input() type1 = 'text';
  @Input() type2 = 'text';
  @Input() titleButton = 'noname';
  @Input() errorText = 'error';

  @Output() onSubmit = new EventEmitter<any>();

  submit(event: any) {
    this.onSubmit.emit(event);
  }

  constructor(public authUtils: AuthUtil) {}
}
