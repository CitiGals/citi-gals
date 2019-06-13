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
  link: 'https://www.girlpowered.com/'},

  {title: 'Stephanie Hannon', text: 'Team Lead',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/vex robotics competition guide.png',
  link: 'https://www.girlpowered.com/'},

  {title: 'Stephanie Hannon', text: 'Team Lead',
  photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/vex startup guidetransparent.png',
  link: 'https://www.girlpowered.com/'}
];

  ngOnInit() {
  }
}
