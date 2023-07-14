import { Injectable } from '@angular/core';
import axios from 'axios';
import { environments } from 'src/environments';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private API_URL = environments.API_URL;

  addEmployee(data: object) {
    return axios.post(`${this.API_URL}/karyawan`, data);
  }
}
