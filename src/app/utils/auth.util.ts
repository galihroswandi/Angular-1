import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthUtil {
  error = false;
  loading = false;
  disabled = false;
}
