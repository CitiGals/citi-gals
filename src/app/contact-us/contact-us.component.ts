import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {
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
          this.changeElement('headerTwo', '1.5em');
          this.changeElement('body', '1em');
          this.changeElement('bodyTwo', '1em');

          this.changeElement('headerThree', '1.5em');
          this.changeElement('bodyThree', '1em');
          this.changeElement('bodyFour', '1em');
          // console.log('third' + this.smallViewport);
        } else {
          this.smallViewport = false;
          this.changeElement('header', '4.5vw');
          this.changeElement('headerTwo', '2.5vw');
          this.changeElement('body', '2vw');
          this.changeElement('bodyTwo', '2vw');

          this.changeElement('headerThree', '2.5vw');
          this.changeElement('bodyThree', '2vw');
          // console.log('else' + this.smallViewport);
        }
      });
    }
}
