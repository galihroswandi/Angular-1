import { Component } from '@angular/core';
import { EmployeeUtil } from 'src/app/utils/formEmployee.util';

@Component({
  selector: 'app-input-kepegawaian',
  templateUrl: './input-kepegawaian.component.html',
  styleUrls: ['./input-kepegawaian.component.css'],
})
export class InputKepegawaianComponent {
  constructor(public employeeUtil: EmployeeUtil) {}
}
