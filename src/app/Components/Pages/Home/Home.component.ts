import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/services/auth.service';
import { CookiesUtils } from 'src/app/utils/cookies.util';

@Component({
  selector: 'app-home',
  templateUrl: 'Home.component.html',
})
export class HomePage {

  constructor(private auth: AuthServices, private cookies: CookiesUtils, private router: Router){}

  handleGetUsers() {
    this.auth.getUser().then((res) => {
      console.log(res);
    });
  }
  
  handleLogout(){
    this.auth.logout().then(res => {
      this.cookies.removeCookies();
      this.router.navigate(['/login']);
    }).catch(err => {
      console.log(err);
    })
  }
}
