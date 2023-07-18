import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-slide-link',
  templateUrl: './navbar-slide-link.component.html',
})
export class NavbarSlideLinkComponent {
  @Input() linkTitle: string = 'Default';
  @Input() iconSrc: string = '/';
  @Input() pathLink: string = '#';
}
