import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {
  constructor() {
  }

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

  ngOnInit() {
  }
}
