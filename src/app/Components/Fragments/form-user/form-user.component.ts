import { Component, Input } from '@angular/core';
import { AuthUtil } from 'src/app/utils/auth.util';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { emailRegex } from 'src/app/utils/emailRegex.util';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
})
export class FormUserComponent {
  @Input() edit: boolean = false;

  constructor(
    public authUtils: AuthUtil,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.authUtils.actionAfterAuth(false, false, false, false);
  }

  dataUser: any = [];

  ngOnInit(): void {
    const idUser = this.route.snapshot.paramMap.get('id');

    if (this.edit) {
      this.userService
        .getUserWhereId(String(idUser))
        .pipe(
          catchError((err) => {
            alert(`User dengan id ${idUser} tidak ditemukan !`);
            return throwError(err);
          })
        )
        .subscribe((res) => {
          this.dataUser = (res as any).user;
        });
    }
  }

  optionDropdown = [
    {
      option: 'Admin',
    },
    {
      option: 'User',
    },
  ];

  handleSubmit(event: any): boolean {
    event.preventDefault();
    this.authUtils.loading = true;

    if (!emailRegex.test(event.target.elements['email'].value)) {
      this.authUtils.actionAfterAuth(false, false, false, true);
      this.authUtils.loading = false;
      return false;
    }

    const data: User = {
      email: event.target.elements['email'].value,
      password: event.target.elements['password'].value,
    };

    if (!this.edit) {
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
    } else {
      this.userService
        .updateUser(this.dataUser.id, data)
        .pipe(
          catchError((err) => {
            alert('Data gagal diubah');
            return throwError(err);
          })
        )
        .subscribe((res) => {
          this.authUtils.loading = false;
          alert('Data berhasil diubah');
          this.router.navigate(['/users']);
        });
    }
    return true;
  }
}
