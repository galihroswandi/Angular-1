import { Component } from '@angular/core';
import { AuthUtil } from 'src/app/utils/auth.util';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { HttpHeaderResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
})
export class FormUserComponent {
  constructor(
    public authUtils: AuthUtil,
    private userService: UserService,
    private router: Router
  ) {}

  optionDropdown = [
    {
      option: 'Admin',
    },
    {
      option: 'User',
    },
  ];

  handleSubmit(event: any): void {
    event.preventDefault();
    this.authUtils.loading = true;

    const data: User = {
      email: event.target.elements['email'].value,
      password: event.target.elements['password'].value,
    };

    this.userService
      .insertUser(data)
      .pipe(
        catchError((err) => {
          this.authUtils.loading = false;
          alert('Data gagal ditambahkan !');
          return throwError(err);
        })
      )
      .subscribe((res) => {
        this.authUtils.loading = false;
        alert('Data berhasil ditambahkan !');
        this.router.navigate(['/users']);
      });
  }
}
