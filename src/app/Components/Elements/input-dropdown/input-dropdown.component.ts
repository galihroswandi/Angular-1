import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
})
export class InputDropdownComponent {
  @Input() name: string = '';
  @Input() options: object = {};

  datas: string[] = [];

  ngOnInit() {
    this.datas = Object.entries(this.options).map(
      ([key, value]) => value.option
    );
  }
}
