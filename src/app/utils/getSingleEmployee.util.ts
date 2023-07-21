import { Injectable } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Injectable({
  providedIn: 'root',
})
export class GetSingleEmployeeUtil {
  constructor(private employeeService: EmployeeService) {}

  data: any = [];

  getSingle(param: string) {
    this.employeeService.getEmployeeWhereID(param).subscribe((res) => {
      this.data = res;
    });
    console.log(this.data);
  }
}
