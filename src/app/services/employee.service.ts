import { Injectable } from '@angular/core';
import axios from 'axios';
import { environments } from 'src/environments';
import { AuthoRization } from '../utils/headersAuthorization';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private API_URL = environments.API_URL;

  constructor(private authorization: AuthoRization) {}

  addEmployee(data: object) {
    return axios.post(
      `${this.API_URL}/karyawan`,
      data,
      this.authorization.headerAuth
    );
  }
  getEmployee() {
    return axios.get(`${this.API_URL}/karyawan`, this.authorization.headerAuth);
  }

  getEmployeeWhereID(id: string | null) {
    return axios.get(
      `${this.API_URL}/karyawan/${id}`,
      this.authorization.headerAuth
    );
  }

  updateEmployee(data: object, id: string) {
    return axios.put(
      `${this.API_URL}/karyawan/${id}`,
      data,
      this.authorization.headerAuth
    );
  }

  deleteEmployee(id: string) {
    return axios.delete(
      `${this.API_URL}/karyawan/${id}`,
      this.authorization.headerAuth
    );
  }
}
