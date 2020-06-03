import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: [
  ]
})
export class CarouselComponent implements OnInit {
  images: any[];
  responsiveOptions;
  constructor() { 
    this.images = [
      'assets/images/home1.jpg',
      'assets/images/home2.jpeg',
      'assets/images/home3.jpg',
      'assets/images/home4.jpg',
      'assets/images/home5.jpg',
      'assets/images/home6.jpg',
    ];
  }

  ngOnInit(): void {
  }

}
