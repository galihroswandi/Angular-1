import { Component } from '@angular/core';
import { AuthServices } from 'src/app/services/auth.service';
import { AuthUtil } from 'src/app/utils/auth.util';
import { Router } from '@angular/router';
import { emailRegex } from 'src/app/utils/emailRegex.util';

@Component({
  selector: 'FormLogin',
  templateUrl: './Form.component.html',
})
export class FormLogin {
  name1 = 'email';
  name2 = 'password';

  constructor(
    private auth: AuthServices,
    public authUtils: AuthUtil,
    private router: Router
  ) {
    this.authUtils.actionAfterAuth(false, false, false, false);
  }

  onSubmit(event: any): boolean {
    event.preventDefault();

    if (!emailRegex.test(event.target.elements[this.name1].value)) {
      this.authUtils.actionAfterAuth(false, false, false, true);
      return false;
    }

    const data: { email: string; password: string } = {
      email: event.target.elements[this.name1].value,
      password: event.target.elements[this.name2].value,
    };

    this.auth
      .login(data)
      .then((res: any) => {
        this.authUtils.actionAfterAuth(false, false, false, false);
        this.authUtils.removeValueForm(event, this.name1, this.name2);

        alert('Login Berhasil');
        this.router.navigate(['/']);
      })
      .catch((err: object) => {
        this.authUtils.actionAfterAuth(true, false, false, false);
        this.authUtils.removeValueForm(event, this.name1, this.name2);
        console.log(err);
      });
    return true;
  }
}
