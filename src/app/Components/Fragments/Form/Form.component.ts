import { Component } from '@angular/core';
import { AuthServices } from 'src/app/services/auth.service';
import { AuthUtil } from 'src/app/utils/auth.util';

@Component({
  selector: 'FormLogin',
  templateUrl: './Form.component.html',
})
export class FormLogin {
  name1 = 'email';
  password = 'password';

  constructor(private auth: AuthServices, public authUtils: AuthUtil) {}

  onSubmit(event: any) {
    event.preventDefault();
    this.authUtils.loading = true;
    this.authUtils.disabled = true;

    const data = {
      username: event.target.elements[this.name1].value,
      password: event.target.elements[this.password].value,
    };

    this.auth
      .login(data)
      .then((res: any) => {
        this.authUtils.loading = false;
        this.authUtils.disabled = false;
        localStorage.setItem('token', res.data.token);
        alert('Login Berhasil');

        event.target.elements[this.name1].value = '';
        event.target.elements[this.password].value = '';
      })
      .catch((err: object) => {
        this.authUtils.loading = false;
        this.authUtils.disabled = false;
        this.authUtils.error = true;
      });
  }
}
