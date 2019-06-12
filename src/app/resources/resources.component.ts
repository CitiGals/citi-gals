import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.sass']
})
export class ResourcesComponent implements OnInit {
  constructor() { }

  links = [{title: 'Stephanie Hannon', text: 'Team Lead',
            photo: '/assets/images/Web page samples and media/Resources link icons/All Finished icons/GPLOGO SNIP beveledTRANSPARENT.png',
            link: 'https://www.girlpowered.com/'},
  {title: 'Stephanie Hannon', text: 'Team Lead', photo: '/assets/images/LogoCircle.png', link: 'https://www.girlpowered.com/'},
  {title: 'Stephanie Hannon', text: 'Team Lead', photo: '/assets/images/LogoCircle.png', link: 'https://www.girlpowered.com/'},
  {title: 'Stephanie Hannon', text: 'Team Lead', photo: '/assets/images/LogoCircle.png', link: 'https://www.girlpowered.com/'},
  {title: 'Stephanie Hannon', text: 'Team Lead', photo: '/assets/images/LogoCircle.png', link: 'https://www.girlpowered.com/'}
];

  ngOnInit() {
  }
}
