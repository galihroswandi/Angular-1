import { Injectable } from '@angular/core';
import axios from 'axios';
import { environments } from 'src/environments';
import { AuthoRization } from '../utils/headersAuthorization';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  constructor(private authorization: AuthoRization) {}
  private apiUrl = environments.API_URL;

  login(data: object): Promise<any> {
    return axios.post(`${this.apiUrl}/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
  }

  createUser(data: object): Promise<any> {
    return axios.post(`${this.apiUrl}/register`, data);
  }

  logout(): Promise<any> {
    return axios.post(
      `${this.apiUrl}/logout`,
      {},
      this.authorization.headerAuth
    );
  }

  getUser() {
    return axios.get(`${this.apiUrl}/user`, this.authorization.headerAuth);
  }

  deleteUser(id: string) {
    return axios.delete(
      `${this.apiUrl}/user/${id}`,
      this.authorization.headerAuth
    );
  }
}
