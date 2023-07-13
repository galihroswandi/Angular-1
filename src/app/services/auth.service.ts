import { Injectable } from '@angular/core';
import axios from 'axios';
import { CookiesUtils } from '../utils/cookies.util';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  constructor(private getCookies: CookiesUtils) {}
  private apiUrl = 'http://localhost:3000';

  login(data: object): Promise<any> {
    return axios.post(`${this.apiUrl}/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
  }

  createUser(data: object): Promise<any> {
    return axios.post(`${this.apiUrl}/register/admin`, data);
  }

  logout():Promise<any> {
    return axios.post(`${this.apiUrl}/logout`, this.getCookies.getCookies());
  }

  getUser() {
    return axios.post(`${this.apiUrl}/user`, this.getCookies.getCookies());
  }
}
