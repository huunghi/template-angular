import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent implements OnInit {
  categories = [];
  constructor() { }

  ngOnInit(): void {
    this.categories = [
      'Nha 2 tang',
      'Nha 3 tang',
      'Nha cap 4'
    ]
  }

}
