import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthUtil {
  error = false;
  loading = false;
  disabled = false;

  actionAfterAuth(error: boolean, loading: boolean, disabled: boolean) {
    this.loading = loading;
    this.disabled = disabled;
    this.error = error;
  }

  removeValueForm(event: any, ...nameInput1: string[]) {
    for (let nameInput of nameInput1) {
      event.target.elements[nameInput].value = '';
    }
  }
}
