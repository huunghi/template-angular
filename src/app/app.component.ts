import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isSticky: boolean = false;
  display: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 14 * 8;
  }
  onOpen(value) {
    console.log(value);
    this.display = value;
  }
}
