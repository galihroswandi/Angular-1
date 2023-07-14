import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';

@Injectable({ providedIn: 'root' })
export class CookiesUtils {
  getCookies() {
    const cookieToken = Cookies.get('access_token');
    const data = {
      accessToken: cookieToken,
    };
    return data;
  }

  removeCookies(): void {
    Cookies.remove('access_token');
  }
}
