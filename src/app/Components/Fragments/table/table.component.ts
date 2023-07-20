import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { CookiesUtils } from 'src/app/utils/cookies.util';
import { environments } from 'src/environments';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnDestroy, OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, { static: false })
  //@ts-ignore
  dtElement: DataTableDirective;
  dtOption: DataTables.Settings = {};
  users: any = [];
  private API_URL = environments.API_URL;

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient, private cookie: CookiesUtils) {}

  ngOnInit(): void {
    this.dtOption = {
      pagingType: 'full_numbers',
    };

    this.getUsers();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
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

  getUsers() {
    this.httpClient
      .get(`${this.API_URL}/user`, {
        headers: {
          //@ts-ignore
          Authorization: this.cookie.getCookies().access_token,
        },
      })
      .subscribe((res) => {
        this.users.push(res);
        this.dtTrigger.next(null);
      });
  }

  handleDelete(id: string) {
    if (confirm('Apakah yakin ingin menghapus ?')) {
      this.httpClient
        .delete(`${this.API_URL}/user/${id}`, {
          headers: {
            //@ts-ignore
            Authorization: this.cookie.getCookies().access_token,
          },
        })
        .subscribe((res) => {
          alert('Data berhasil dihapus !');
          this.rerender();
        });
    }
  }
}
