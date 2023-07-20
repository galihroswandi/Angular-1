import { Component, Input } from '@angular/core';

@Component({
  selector: 'Input-form',
  templateUrl: './InputForm.component.html',
})
export class InputForm {
  @Input() name: string = 'none';
  @Input() type: string = 'text';
  @Input() placeholder: string = 'none';
  @Input() classname?: string[] = [];
  @Input() classInput?: string[] = [];
  @Input() value?: string;

  getClassWrapper(): string[] {
    const classess: string[] = [
      'flex',
      'flex-col',
      'gap-y-1',
      'justify-between',
    ];

    if (this.classname) {
      return classess.concat(this.classname);
    } else {
      return classess;
    }
  }

  getInputClass() {
    const classess: string[] = [
      'border',
      'border-slate-700',
      'py-1.5',
      'md:py-2.5',
      'lg:py-1.5',
      'px-3',
      'text-sm',
      'outline-none',
      'rounded-md',
      'text-slate-700',
      'md:w-[20rem]',
    ];
    if (this.classInput) {
      return classess.concat(this.classInput);
    } else {
      return classess;
    }
  }
}
