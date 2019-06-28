import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'citi-gals';
  smallViewport = false;

  constructor(public breakpointObserver: BreakpointObserver) { }


// tslint:disable-next-line: use-lifecycle-interface
ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.HandsetPortrait
    ]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        // console.log('second' + this.smallViewport);
        this.smallViewport = true;
        // console.log('third' + this.smallViewport);
      } else {
        this.smallViewport = false;
        // console.log('else' + this.smallViewport);
      }
    });
  }
}
