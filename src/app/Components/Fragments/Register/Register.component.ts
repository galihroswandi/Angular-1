import { Component } from '@angular/core';
import { AuthServices } from 'src/app/services/auth.service';
import { AuthUtil } from 'src/app/utils/auth.util';

@Component({
  selector: 'app-register',
  templateUrl: './Register.component.html',
})
export class RegisterComponent {
  name1 = 'email';
  password = 'password';

  constructor(private auth: AuthServices, public authUtils: AuthUtil) {}

  onSubmit(event: any): void {
    event.preventDefault();
    this.authUtils.loading = true;
    this.authUtils.disabled = true;

    const data = {
      username: event.target.elements[this.name1].value,
      password: event.target.elements[this.password].value,
    };

    this.auth
      .createUser(data)
      .then((res) => {
        this.authUtils.loading = false;
        this.authUtils.disabled = false;

        event.target.elements[this.name1].value = '';
        event.target.elements[this.password].value = '';
      })
      .catch((err) => {
        this.authUtils.loading = false;
        this.authUtils.disabled = false;
        this.authUtils.error = true;
      });
  }

  hideRegister() {
    const slideRegister = document.getElementById('target-slide-register');
    slideRegister?.classList.replace('translate-y-0', '-translate-y-[90vh]');
    slideRegister?.classList.replace('opacity-1', 'opacity-0');
    setTimeout(() => {
      slideRegister?.classList.add('hidden');
    }, 500);
  }
}
