import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject, catchError, throwError } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

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

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.dtOption = {
      pagingType: 'full_numbers',
      responsive: true,
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
    this.userService
      .getUsers()
      .pipe(
        catchError((err) => {
          alert('Data gagal di load !');
          return throwError(err);
        })
      )
      .subscribe((res) => {
        this.users.push(res);
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
