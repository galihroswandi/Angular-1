import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  templateUrl: './navbar-link.component.html',
})
export class NavbarLinkComponent {
  @Input() classLink?: string[];
  @Input() iconSrc: string = '';
  @Input() linkTitle: string = 'Default';
  @Input() pathLink: string = '/';

  getClassLink() {
    const classes = [
      'flex',
      'flex-col',
      'justify-center',
      'items-center',
      'font-normal',
      'text-xs',
      'text-white',
    ];
    if (this.classLink) {
      return classes.concat(this.classLink);
    } else {
      return classes;
    }
  }

  handleClick(e: any) {
    if (this.linkTitle === 'Menu') {
      e.preventDefault();

      const targetSlid = document.getElementById('target-navbar-slide');
      if (targetSlid?.classList.contains('hidden')) {
        targetSlid?.classList.remove('hidden');
        setTimeout(() => {
          targetSlid?.classList.replace('translate-x-56', 'translate-x-0');
          targetSlid?.classList.replace('opacity-0', 'opacity-1');
        }, 100);
      } else {
        targetSlid?.classList.replace('translate-x-0', 'translate-x-56');
        targetSlid?.classList.replace('opacity-1', 'opacity-0');
        setTimeout(() => {
          targetSlid?.classList.add('hidden');
        }, 200);
      }
    }
  }
}
