import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  private apiUrl = 'http://localhost:3000';

  login(data: object): Promise<any> {
    return axios.post(`${this.apiUrl}/login`, data);
  }

  createUser(data: object): Promise<any> {
    return axios.post(`${this.apiUrl}/register/admin`, data);
  }

  getUser() {
    return axios.post(`${this.apiUrl}/logout`);
  }
}
