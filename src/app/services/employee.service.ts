import { Injectable } from '@angular/core';
import axios from 'axios';
import { environments } from 'src/environments';
import { CookiesUtils } from '../utils/cookies.util';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private API_URL = environments.API_URL;

  constructor(private cookies: CookiesUtils) {}

  addEmployee(data: object) {
    return axios.post(`${this.API_URL}/karyawan`, data, {
      headers: {
        Authorization: this.cookies.getCookies().access_token,
      },
    });
  }
  getEmployee() {
    const cookies = this.cookies.getCookies();
    return axios.get(`${this.API_URL}/karyawan`, {
      headers: {
        Authorization: cookies.access_token,
      },
    });
  }

  getEmployeeWhereID(id: string | null) {
    return axios.get(`${this.API_URL}/karyawan/${id}`, {
      headers: {
        Authorization: this.cookies.getCookies().access_token,
      },
    });
  }

  updateEmployee(data: object, id: string) {
    return axios.put(`${this.API_URL}/karyawan/${id}`, data, {
      headers: {
        Authorization: this.cookies.getCookies().access_token,
      },
    });
  }

  deleteEmployee(id: string) {
    return axios.delete(`${this.API_URL}/karyawan/${id}`, {
      headers: {
        Authorization: this.cookies.getCookies().access_token,
      },
    });
  }
}
