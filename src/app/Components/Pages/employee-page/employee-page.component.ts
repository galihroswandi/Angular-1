import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { ConvertTimestamp } from 'src/app/utils/convertTimestampLocal';
import { CookiesUtils } from 'src/app/utils/cookies.util';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
})
export class EmployeePageComponent {
  constructor(
    private employee: EmployeeService,
    public convertTimestamp: ConvertTimestamp,
    private cookie: CookiesUtils,
    private router: Router
  ) {}
  dtoptions: DataTables.Settings = {};
  data: any[] = [];

  ngOnInit(): void {
    if (!this.cookie.getCookies().access_token) {
      this.router.navigate(['/login']);
    }
    this.dtoptions = {
      responsive: true,
    };

    this.handleGetUsers();
  }

  async handleGetUsers() {
    const res = await this.employee.getEmployee();
    this.data.push(res.data.result);
  }

  onEditEmployee(event: any, id: number) {
    alert('oke');
    // event.preventDefault();
    // this.router.navigate(['/edit-employee', id]);
  }
}
