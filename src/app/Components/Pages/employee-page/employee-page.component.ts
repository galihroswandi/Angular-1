import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { CookiesUtils } from 'src/app/utils/cookies.util';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
})
export class EmployeePageComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  //@ts-ignore
  dtElement: DataTableDirective;

  constructor(
    private employee: EmployeeService,
    private cookie: CookiesUtils,
    private router: Router
  ) {}
  data: any = [];

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    if (!this.cookie.getCookies().access_token) {
      this.router.navigate(['/login']);
    }
    this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
    };

    this.getEmployee();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getEmployee();
    });
  }

  async deleteEmployee(idKaryawan: string) {
    await this.employee.deleteEmployee(idKaryawan);
    alert('Data berhasil dihapus !');
    this.rerender();
  }

  getEmployee() {
    this.employee.getEmployee().subscribe((res) => {
      this.data = res;
      this.dtTrigger.next(null);
    });
  }
}
