import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.sass']
})
export class ResourcesComponent implements OnInit {
  smallViewport = false;

  constructor(public breakpointObserver: BreakpointObserver) { }

  links = [{title: 'Take the Girl Powered Pledge',
            text: 'Pledge to increase the number of women involved in STEM and robotics!',
            photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/GPLOGO SNIP beveledTRANSPARENT.png',
            link: 'https://www.girlpowered.com/'},

  {title: 'Vex Guide: How To Start a Team', text: 'Information and links to start your own Vex Robotics team.',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/Vex Startup 2.png',
  link: 'https://www.roboticseducation.org/documents/2017/09/how-to-start-and-organize-a-vrc-team.pdf'},

  {title: 'Vex Robotics Competition (VRC)', text: 'Current game manual and video.',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/vex robotics competition guide.png',
  link: 'https://www.vexrobotics.com/vexedr/competition/vrc-current-game'},

  {title: 'REC Foundation',
  text: 'Explore the website! There are links and tutorials to almost any question you can think of.',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/REC Foundation beveled.png',
  link: 'https://www.roboticseducation.org/competition-teams/vex-robotics-competition/'},

  {title: 'RobotEvents Map',
  text: 'Find robotics competitions in your area!',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/vex map.png',
  link: 'https://www.robotevents.com/map'},

  {title: '101 Things To Know Before Going To Competition',
  text: 'Best "night before" checklist for first-year teams.',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/VEX things to know picture 2.png',
  link: 'https://www.robotevents.com/map'},

  {title: 'Vex EDR Teacher Curriculum',
  text: 'Lots of info about robotics basics and how to teach robotics to team members.',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/VEX EDR 2.png',
  link: 'https://www.robotevents.com/map'},

  {title: 'Download Vex Coding Studio',
  text: 'Available on both Mac and Windows.',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/download.png',
  link: 'https://www.robotevents.com/map'},

  {title: 'Vex Coding Studio API Reference',
  text: 'Documentation for Vex Coding Studio and Vex C++. This is the best resource for coding for Vex!',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/api.png',
  link: 'https://www.robotevents.com/map'}
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
        this.changeElement('body', '1em');
        this.changeElement('headerTwo', '2em');
        this.changeElement('bodyTwo', '1em');
        this.changeElement('bodyThree', '1em');
        // console.log('third' + this.smallViewport);
      } else {
        this.smallViewport = false;
        this.changeElement('header', '4.5vw');
        this.changeElement('body', '1.75vw');
        this.changeElement('headerTwo', '3vw');
        this.changeElement('bodyTwo', '1.75vw');
        this.changeElement('bodyThree', '1.75vw');
        // console.log('else' + this.smallViewport);
      }
    });
  }
}
