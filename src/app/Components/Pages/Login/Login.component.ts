import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesUtils } from 'src/app/utils/cookies.util';

@Component({
  selector: 'app-login',
  templateUrl: 'Login.component.html',
})
export class LoginPage implements OnInit {
  constructor(private cookie: CookiesUtils, private router: Router) {}
  ngOnInit(): void {
    if (this.cookie.getCookies().access_token) {
      this.router.navigate(['/']);
    }
  }
}
