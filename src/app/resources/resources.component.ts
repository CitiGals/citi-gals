import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.sass']
})
export class ResourcesComponent implements OnInit {
  constructor() { }

  links = [{title: 'Take the Girl Powered Pledge', 
            text: 'Pledge to increase the number of women involved in STEM and robotics!',
            photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/GPLOGO SNIP beveledTRANSPARENT.png',
            link: 'https://www.girlpowered.com/'},

  {title: 'REC Foundation',
  text: 'Explore the website! There are links and tutorials to almost any question you can think of.',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/REC Foundation beveled.png',
  link: 'https://www.roboticseducation.org/competition-teams/vex-robotics-competition/'},

  {title: 'RobotEvents Map',
  text: 'Find robotics competitions in your area!',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/vex map.png',
  link: 'https://www.robotevents.com/map'},

  {title: 'Vex Robotics Competition (VRC)', text: 'Current game manual and video.',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/vex robotics competition guide.png',
  link: 'https://www.vexrobotics.com/vexedr/competition/vrc-current-game'},

  {title: 'Vex Guide: How To Start a Team', text: 'Information and links to start your own Vex Robotics team.',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/vex startup guidetransparent.png',
  link: 'https://www.roboticseducation.org/documents/2017/09/how-to-start-and-organize-a-vrc-team.pdf'}
];

  ngOnInit() {
  }
}
