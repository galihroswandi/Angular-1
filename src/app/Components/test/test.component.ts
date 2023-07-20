import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CookiesUtils } from 'src/app/utils/cookies.util';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  persons: any = [];

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient, private cookie: CookiesUtils) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
    };
    this.httpClient
      .get('http://localhost:4000/user', {
        headers: {
          //@ts-ignore
          Authorization: this.cookie.getCookies().access_token,
        },
      })
      .subscribe((data) => {
        this.persons.push(data);
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next(null);
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
