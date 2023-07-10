import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  private apiUrl = 'https://fakestoreapi.com';

  login(data: object): Promise<any> {
    return axios.post(`${this.apiUrl}/auth/login`, data);
  }

  createUser(data: object): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve('oke');
    });
  }
}
