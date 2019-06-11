import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {
  constructor() { }

  images = ['/assets/images/LogoCircle.png',
    '/assets/images/Edited_TeamPhotos/Victoria2019_Circular.png',
    '/assets/images/Edited_TeamPhotos/EmilyH2019_Circular.png',
    '/assets/images/Edited_TeamPhotos/EmilyK2019_Circular.png',
    '/assets/images/Edited_TeamPhotos/Farah2019_Circular.png',
    '/assets/images/Edited_TeamPhotos/Kshama2019_Circular.png',
    '/assets/images/Edited_TeamPhotos/Riya2019_Circular.png'];

  ngOnInit() {
  }
}
