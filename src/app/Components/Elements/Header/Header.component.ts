import { Component, Input } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './Header.component.html',
})
export class Header {
  @Input() title: string = '';
  @Input() classname: string = '';
  @Input() classP: string = '';

  getClassTitle(): string[] {
    const classes = ['font-bold', 'mb-2', 'leading-6', 'text-slate-900'];
    if (this.classname) {
      classes.push(this.classname);
    }
    return classes;
  }

  getClassParagraph(): string[] {
    const classese = ['text-sm', 'text-slate-800'];
    if (this.classP) {
      classese.push(this.classP);
    }
    return classese;
  }
}
