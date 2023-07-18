import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthUtil } from 'src/app/utils/auth.util';
import { EmployeeUtil } from 'src/app/utils/formEmployee.util';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
})
export class FormEmployeeComponent {
  constructor(
    private employeeService: EmployeeService,
    public employeeUtil: EmployeeUtil,
    public autUtils: AuthUtil
  ) {}

  async insertEmployee(event: any) {
    event.preventDefault();
    this.autUtils.loading = true;
    const data = this.employeeUtil.dataPost(event, this.autUtils.loading);
    if (data) {
      try {
        await this.employeeService.addEmployee(data);
        this.autUtils.loading = false;
        alert('Data berhasil ditambahkan');
        this.employeeUtil.removeValue(event);
      } catch (err) {
        alert('Data gagal ditambahkan !');
      }
    } else {
      this.autUtils.loading = false;
      this.autUtils.loading = false;
    }
  }
}
