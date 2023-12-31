import { Component } from '@angular/core';
import { AuthServices } from 'src/app/services/auth.service';
import { AuthUtil } from 'src/app/utils/auth.util';
import { emailRegex } from 'src/app/utils/emailRegex.util';

@Component({
  selector: 'app-register',
  templateUrl: './Register.component.html',
})
export class RegisterComponent {
  name1 = 'Email';
  name2 = 'Password';

  constructor(private auth: AuthServices, public authUtils: AuthUtil) {}

  startRegister(event: any): boolean {
    event.preventDefault();

    const regex = emailRegex;

    if (!regex.test(event.target.elements[this.name1].value)) {
      this.authUtils.actionAfterAuth(false, false, false, true);
      return false;
    }

    const data: { email: string; password: string } = {
      email: event.target.elements[this.name1].value,
      password: event.target.elements[this.name2].value,
    };

    this.auth
      .createUser(data)
      .then((res) => {
        this.authUtils.actionAfterAuth(false, false, false, false);
        alert('User created !');
        this.authUtils.removeValueForm(event, this.name1, this.name2);
        this.hideRegister();
      })
      .catch((err) => {
        this.authUtils.actionAfterAuth(true, false, false, false);
        this.authUtils.removeValueForm(event, this.name1, this.name2);
      });

    return true;
  }

  hideRegister() {
    this.authUtils.actionAfterAuth(false, false, false, false);
    const slideRegister = document.getElementById('target-slide-register');
    slideRegister?.classList.replace('translate-y-0', '-translate-y-[90vh]');
    slideRegister?.classList.replace('opacity-1', 'opacity-0');
    setTimeout(() => {
      slideRegister?.classList.add('hidden');
    }, 500);
  }
}
