import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';

@Injectable({ providedIn: 'root' })
export class GetCookies {
  getCookies(): Object {
    const cookieToken = Cookies.get('access_token');

    const data = {
      accessToken: cookieToken,
    };
    return data;
  }
}
