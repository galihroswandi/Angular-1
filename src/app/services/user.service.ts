import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments';
import { AuthoRization } from '../utils/headersAuthorization';

export interface User {
  email: string;
  password: string;
  role?: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = environments.API_URL;

  constructor(private http: HttpClient, private authorization: AuthoRization) {}

  getUsers() {
    return this.http.get(`${this.API_URL}/user`, this.authorization.headerAuth);
  }

  insertUser(data: User) {
    return this.http.post(
      `${this.API_URL}/user`,
      data,
      this.authorization.headerAuth
    );
  }

  deleteUser(id: string) {
    return this.http.delete(
      `${this.API_URL}/user/${id}`,
      this.authorization.headerAuth
    );
  }

  getUserWhereId(id: string) {
    return this.http.get(
      `${this.API_URL}/user/${id}`,
      this.authorization.headerAuth
    );
  }

  updateUser(id: string, data: object) {
    return this.http.put(
      `${this.API_URL}/user/${id}`,
      data,
      this.authorization.headerAuth
    );
  }
}
