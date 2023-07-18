import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeUtil } from 'src/app/utils/formEmployee.util';

@Component({
  selector: 'app-input-pendidikan',
  templateUrl: './input-pendidikan.component.html',
})
export class InputPendidikanComponent {
  constructor(
    public employeeUtil: EmployeeUtil,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  dataEdit: any = [];

  ngOnInit(): void {
    const paramValue = this.route.snapshot.paramMap.get('id');
    if (paramValue) {
      this.employeeService.getEmployeeWhereID(paramValue).then((data) => {
        this.dataEdit.push(data.data.karyawan);
      });
    }
  }
}
