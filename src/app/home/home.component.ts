import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  smallViewport = false;

  constructor(public breakpointObserver: BreakpointObserver) { }

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
          this.changeElement('body', '1em');
          this.changeElement('headerTwo', '2em');
          this.changeElement('bodyTwo', '1em');
          this.changeElement('bodyThree', '1em');
          // console.log('third' + this.smallViewport);
        } else {
          this.smallViewport = false;
          this.changeElement('header', '3vw');
          this.changeElement('body', '1.75vw');
          this.changeElement('headerTwo', '3vw');
          this.changeElement('bodyTwo', '1.75vw');
          this.changeElement('bodyThree', '1.75vw');
          // console.log('else' + this.smallViewport);
        }
      });
    }
}
