import { Component } from '@angular/core';

@Component({
  selector: 'Register',
  templateUrl: './Register.component.html',
})
export class RegisterButtonComponent {
  showRegister() {
    const slideRegister = document.getElementById('target-slide-register');
    slideRegister?.classList.remove('hidden');
    setTimeout(() => {
      slideRegister?.classList.replace('-translate-y-[90vh]', 'translate-y-0');
      slideRegister?.classList.replace('opacity-0', 'opacity-1');
    }, 100);
  }
}
