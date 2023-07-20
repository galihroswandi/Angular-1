import { Component } from '@angular/core';
import { AuthUtil } from 'src/app/utils/auth.util';

@Component({
  selector: 'app-button-form',
  templateUrl: './button-form.component.html',
})
export class ButtonFormComponent {
  constructor(public authUtils: AuthUtil) {}
}
