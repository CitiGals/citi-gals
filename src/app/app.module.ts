import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatGridListModule} from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';


import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TeamLeftComponent } from './team-left/team-left.component';
import { TeamRightComponent } from './team-right/team-right.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PhotosComponent } from './photos/photos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ResourcesComponent,
    CarouselComponent,
    TeamLeftComponent,
    TeamRightComponent,
    ContactUsComponent,
    PhotosComponent,
    MobileHeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatGridListModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
