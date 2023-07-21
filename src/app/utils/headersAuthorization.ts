import { Injectable } from '@angular/core';
import { CookiesUtils } from './cookies.util';

@Injectable({
  providedIn: 'root',
})
export class AuthoRization {
  constructor(private cookieUtils: CookiesUtils) {}
  headerAuth = {
    headers: {
      Authorization: this.cookieUtils.getCookies().access_token || '',
    },
  };
}
