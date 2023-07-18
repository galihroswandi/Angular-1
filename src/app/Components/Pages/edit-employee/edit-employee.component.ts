import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookiesUtils } from 'src/app/utils/cookies.util';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
})
export class EditEmployeeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cookie: CookiesUtils,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.cookie.getCookies().access_token) {
      this.router.navigate(['/login']);
    }
    const paramValue = this.route.snapshot.paramMap.get('id');
    console.log(paramValue);
  }
}
