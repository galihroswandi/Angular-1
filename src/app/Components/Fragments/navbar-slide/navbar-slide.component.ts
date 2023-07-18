import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/services/auth.service';
import { CookiesUtils } from 'src/app/utils/cookies.util';

@Component({
  selector: 'app-navbar-slide',
  templateUrl: './navbar-slide.component.html',
})
export class NavbarSlideComponent {
  constructor(
    private cookies: CookiesUtils,
    private router: Router,
    private auth: AuthServices
  ) {}

  handleLogout() {
    if (confirm('Apakah yakin ingin keluar ?')) {
      this.auth
        .logout()
        .then((res) => {
          this.cookies.removeCookies();
          this.router.navigate(['/login']);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
