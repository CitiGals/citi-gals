import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass']
})
export class PhotosComponent implements OnInit {
  smallViewport = false;

  constructor(public breakpointObserver: BreakpointObserver) { }

  images2018 = ['/assets/images/PhotosPage/Seaplane2018_2.jpg',
  '/assets/images/PhotosPage/InTheQueue2.jpg',
  '/assets/images/PhotosPage/JudgesAward1.jpg',
  '/assets/images/PhotosPage/JudgesAwardStanding1.jpg',
  '/assets/images/PhotosPage/Ranking2.jpg',
  '/assets/images/PhotosPage/Seaplane2018_3.jpg',
  '/assets/images/PhotosPage/Seaplane2018_5.jpg',
  '/assets/images/PhotosPage/Seaplane2018_6.jpg',
  '/assets/images/PhotosPage/Seaplane2018_7.jpg',
  '/assets/images/PhotosPage/Seaplane2018_8.jpg',
  '/assets/images/PhotosPage/Seaplane2018_11.jpg',
  '/assets/images/PhotosPage/SeaplaneQue2018_2.jpg',
  '/assets/images/PhotosPage/Seaplane2018_9.jpg',
  '/assets/images/PhotosPage/SeaplaneQueue2018_1.jpg',
  '/assets/images/PhotosPage/SportsmanshipAward.jpg'];

  images2019 = ['/assets/images/PhotosPage/2019/InnovateAwardVictoriaJordan.jpg',
  '/assets/images/PhotosPage/2019/PreComp2019_1.jpg',
  '/assets/images/PhotosPage/2019/PreComp2019_2.2.jpg',
  '/assets/images/PhotosPage/2019/PreComp2019_2.jpg',
  '/assets/images/PhotosPage/2019/PreComp2019_4.jpg',
  '/assets/images/PhotosPage/2019/PreComp2019_7.jpg',
  '/assets/images/PhotosPage/2019/PreComp2019_10.jpg',
  '/assets/images/PhotosPage/2019/Seaplane2019_1.jpg',
  '/assets/images/PhotosPage/2019/Seaplane2019_2.jpg'];

  // tslint:disable-next-line: ban-types
  changeElement(id: string, size: string) {
    const element = document.getElementById(id);
    element.style.fontSize = size;
    // element.style.color = 'red';
    }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
      this.breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.HandsetPortrait
      ]).subscribe((state: BreakpointState) => {
        if (state.matches) {
          // console.log('second' + this.smallViewport);
          this.smallViewport = true;

          // header on desktop is 3vw
          // body on desktop is 1.75vw
          this.changeElement('header', '2em');

          // console.log('third' + this.smallViewport);
        } else {
          this.smallViewport = false;
          this.changeElement('header', '4.5vw');
          // console.log('else' + this.smallViewport);
        }
      });
    }
}
