import {
  AfterViewInit,
  Component,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { CookiesUtils } from 'src/app/utils/cookies.util';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
})
export class EmployeePageComponent implements AfterViewInit, OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: any = [];

  constructor(
    private employee: EmployeeService,
    private cookie: CookiesUtils,
    private router: Router,
    private renderer: Renderer2
  ) {}
  data: any[] = [];

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.classList.contains('delete')) {
        const idKaryawan = event.target.id;
        this.deleteEmployee(idKaryawan);
      } else if (event.target.classList.contains('change')) {
        const karyawanId = event.target.id;
        this.router.navigate(['/edit-employee', karyawanId]);
      }
    });
    this.dtTrigger.next(null);
  }

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
      this.dtTrigger.next(null);
    });
  }

  async deleteEmployee(idKaryawan: string) {
    if (confirm('Apakah yakin ingin menghapus ?')) {
      await this.employee.deleteEmployee(idKaryawan);
      this.getEmployee();
    }
  }

  async getEmployee() {
    const res = await this.employee.getEmployee();
    this.data.push(res.data.result);
    this.rerender();
  }
}
