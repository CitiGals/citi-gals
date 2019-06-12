import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent {
  images = ['/assets/images/Edited2018/Ranking2.jpg',
    '/assets/images/Edited2019/Seaplane2019_1.jpg',
    '/assets/images/Edited2018/Seaplane2018_2.jpg'];
}
