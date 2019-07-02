import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {
  smallViewport = false;

  constructor(public breakpointObserver: BreakpointObserver) { }

  team = [
    {name: 'Stephanie Hannon', position: 'Team Lead', photo: '/assets/images/LogoCircle.png'},
    {name: 'Victoria Huang', position: 'Engineering', photo: '/assets/images/Edited_TeamPhotos/Victoria2019_Circular.png'},
    {name: 'Yashika Vadlamani', position: 'Engineering', photo: '/assets/images/LogoCircle.png'},
    {name: 'Lynn Lawry', position: 'Engineering', photo: '/assets/images/LogoCircle.png'},
  ];

  teamAlum = [
    {name: 'Emily Hannon', position: 'Team Founder', photo: '/assets/images/Edited_TeamPhotos/EmilyH2019_Circular.png'},
    {name: 'Emily Kelsey', position: 'Programming', photo: '/assets/images/Edited_TeamPhotos/EmilyK2019_Circular.png'},
    {name: 'Farah Contractor', position: 'Engineering', photo: '/assets/images/Edited_TeamPhotos/Farah2019_Circular.png'},
    {name: 'Kshama Shetty', position: 'Marketing', photo: '/assets/images/Edited_TeamPhotos/Kshama2019_Circular.png'},
    {name: 'Riya Shah', position: 'Marketing', photo: '/assets/images/Edited_TeamPhotos/Riya2019_Circular.png'},
    {name: 'Maanasi Vadlamani', position: 'Engineering', photo: '/assets/images/LogoCircle.png'},
    {name: 'Chloe Connor', position: 'Engineering', photo: '/assets/images/LogoCircle.png'},
    {name: 'Jordan Sweeney', position: 'Engineering', photo: '/assets/images/LogoCircle.png'},
    {name: 'Amanda Doci', position: 'Engineering', photo: '/assets/images/LogoCircle.png'},
    {name: 'Elma Bektic', position: 'Marketing', photo: '/assets/images/LogoCircle.png'},
    {name: 'Kyla Cote', position: 'Marketing', photo: '/assets/images/LogoCircle.png'}
  ];

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
            this.changeElement('headerTwo', '2em');
            // console.log('third' + this.smallViewport);
          } else {
            this.smallViewport = false;
            this.changeElement('header', '3vw');
            this.changeElement('headerTwo', '3vw');
            // console.log('else' + this.smallViewport);
          }
        });
      }
}
