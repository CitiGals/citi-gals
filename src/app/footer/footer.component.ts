import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  constructor() { }

  sociaIcons = ['/assets/images/SocialMediaIcons/gmailIcon.svg',
  '/assets/images/SocialMediaIcons/instaIcon.svg',
  '/assets/images/SocialMediaIcons/twitterIcon.svg'
  ];

  ngOnInit() {
  }
}
