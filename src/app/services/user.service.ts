import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments';
import { CookiesUtils } from '../utils/cookies.util';

export interface User {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = environments.API_URL;

  constructor(private http: HttpClient, private cookieUtils: CookiesUtils) {}

  getUsers() {
    return this.http.get(`${this.API_URL}/user`, {
      headers: {
        //@ts-ignore
        Authorization: this.cookieUtils.getCookies().access_token,
      },
    });
  }

  insertUser(data: User) {
    return this.http.post(`${this.API_URL}/register`, data);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.API_URL}/user/${id}`, {
      headers: {
        //@ts-ignore
        Authorization: this.cookieUtils.getCookies().access_token,
      },
    });
  }

  getUserWhereId(id: string) {
    return this.http.get(`${this.API_URL}/user/${id}`, {
      headers: {
        //@ts-ignore
        Authorization: this.cookieUtils.getCookies().access_token,
      },
    });
  }

  updateUser(id: string, data: object) {
    return this.http.put(`${this.API_URL}/user/${id}`, data, {
      headers: {
        //@ts-ignore
        Authorization: this.cookieUtils.getCookies().access_token,
      },
    });
  }
}
