import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject, catchError, throwError } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { CookiesUtils } from 'src/app/utils/cookies.util';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  //@ts-ignore
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  users: any = [];

  constructor(
    private userService: UserService,
    private cookie: CookiesUtils,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.cookie.getCookies().access_token) {
      this.router.navigate(['/login']);
    }

    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
    };

    this.getUsers();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getUsers();
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
      this.dtTrigger.next(null);
    });
  }

  handleDelete(id: string) {
    if (confirm('Apakah yakin ingin menghapus ?')) {
      this.userService
        .deleteUser(id)
        .pipe(
          catchError((err) => {
            alert('Data gagal dihapus !');
            return throwError(err);
          })
        )
        .subscribe((res) => {
          alert('Data Berhasil dihapus !');
          this.rerender();
        });
    }
  }
}
