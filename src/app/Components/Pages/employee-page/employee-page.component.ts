import {
  Component,
  OnDestroy,
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
export class EmployeePageComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  //@ts-ignore
  dtElement: DataTableDirective;

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
        this.deleteEmployee(event.target.id);
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

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next(null);
    });
  }

  async deleteEmployee(idKaryawan: string) {
    await this.employee.deleteEmployee(idKaryawan);
    alert('Data berhasil dihapus !');
    this.rerender();
  }

  async getEmployee() {
    const res = await this.employee.getEmployee();
    this.data.push(res.data.result);
    this.rerender();
  }
}
