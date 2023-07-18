import { Component } from '@angular/core';
import { EmployeeUtil } from 'src/app/utils/formEmployee.util';

@Component({
  selector: 'app-input-pendidikan',
  templateUrl: './input-pendidikan.component.html',
  styleUrls: ['./input-pendidikan.component.css'],
})
export class InputPendidikanComponent {
  constructor(public employeeUtil: EmployeeUtil) {}
}
