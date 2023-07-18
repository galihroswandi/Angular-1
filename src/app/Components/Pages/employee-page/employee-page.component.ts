import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { ConvertTimestamp } from 'src/app/utils/convertTimestampLocal';
import { CookiesUtils } from 'src/app/utils/cookies.util';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
})
export class EmployeePageComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private employee: EmployeeService,
    public convertTimestamp: ConvertTimestamp,
    private cookie: CookiesUtils,
    private router: Router,
    private renderer: Renderer2
  ) {}
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  data: any[] = [];

  ngOnInit(): void {
    if (!this.cookie.getCookies().access_token) {
      this.router.navigate(['/login']);
    }
    this.dtoptions = {
      responsive: true,
      pagingType: 'full_numbers',
    };

    this.getEmployee();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.classList.contains('delete')) {
        const idKaryawan = event.target.id;
        this.deleteEmployee(idKaryawan);
      }
    });
  }

  async deleteEmployee(idKaryawan: string) {
    const res = await this.employee.deleteEmployee(idKaryawan);
  }

  async getEmployee() {
    const res = await this.employee.getEmployee();
    this.data.push(res.data.result);
  }
}
