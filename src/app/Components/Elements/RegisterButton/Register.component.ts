import { Component } from '@angular/core';
import { AuthUtil } from 'src/app/utils/auth.util';

@Component({
  selector: 'Register',
  templateUrl: './Register.component.html',
})
export class RegisterButtonComponent {
  constructor(private authUtils: AuthUtil) {}

  showRegister() {
    this.authUtils.actionAfterAuth(false, false, false);
    const slideRegister = document.getElementById('target-slide-register');
    slideRegister?.classList.remove('hidden');
    setTimeout(() => {
      slideRegister?.classList.replace('-translate-y-[90vh]', 'translate-y-0');
      slideRegister?.classList.replace('opacity-0', 'opacity-1');
    }, 100);
  }
}
