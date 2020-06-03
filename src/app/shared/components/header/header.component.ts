import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() isSticky;
  @Output() open: EventEmitter<any> = new EventEmitter();
  display = false;
  constructor() { }

  ngOnInit(): void {
  }

  openDrawer() {
    this.open.emit(true);
  }
}
