import { Component, Input } from '@angular/core';

@Component({
  selector: 'LinkFooter',
  templateUrl: './LinkFooter.component.html',
})
export class LinkFooterComponent {
  @Input() text_footer: string = '';
  @Input() csClass: string = '';

  getClass = (): string[] => {
    const classname = [
      'font-light',
      ' text-slate-800',
      ' text-xs',
      ' cursor-pointer',
      ' hover:text-blue-600',
    ];

    if (this.csClass) {
      classname.push(this.csClass);
    }

    return classname;
  };
}
