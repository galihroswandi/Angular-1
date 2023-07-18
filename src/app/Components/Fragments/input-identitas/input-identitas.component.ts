import { Component } from '@angular/core';
import { EmployeeUtil } from 'src/app/utils/formEmployee.util';

@Component({
  selector: 'app-input-identitas',
  templateUrl: './input-identitas.component.html',
})
export class InputIdentitasComponent {
  constructor(public employeeUtil: EmployeeUtil) {}
}
