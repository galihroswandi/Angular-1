import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/services/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { CookiesUtils } from 'src/app/utils/cookies.util';

@Component({
  selector: 'app-home',
  templateUrl: 'Home.component.html',
})
export class HomePage implements OnInit {
  constructor(
    private auth: AuthServices,
    private employeeService: EmployeeService,
    private cookie: CookiesUtils,
    private router: Router
  ) {}

  dtoptions: DataTables.Settings = {};
  data: any[] = [];

  ngOnInit(): void {
    if (!this.cookie.getCookies().access_token) {
      this.router.navigate(['/login']);
    }
    this.dtoptions = {};

    this.handleGetUsers();
  }

  async handleGetUsers() {
    const res = await this.auth.getUser();
    this.data.push(res.data);
  }

  async getEmployee() {
    this.employeeService.getEmployee().then((res) => {
      console.log(res);
    });
  }
}
