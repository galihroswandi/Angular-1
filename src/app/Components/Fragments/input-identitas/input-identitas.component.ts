import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeUtil } from 'src/app/utils/formEmployee.util';

@Component({
  selector: 'app-input-identitas',
  templateUrl: './input-identitas.component.html',
})
export class InputIdentitasComponent {
  constructor(
    public employeeUtil: EmployeeUtil,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  dataEdit: any = [];

  ngOnInit(): void {
    const paramValue = this.route.snapshot.paramMap.get('id');
    if (paramValue) {
      this.employeeService.getEmployeeWhereID(paramValue).subscribe((res) => {
        this.dataEdit = res;
      });
    }
  }
}
