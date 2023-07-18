import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConvertTimestamp {
  convert(timestamp: string): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Asia/Jakarta',
    };
    const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(
      date
    );
    return formattedDate;
  }
}
