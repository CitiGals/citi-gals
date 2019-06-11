import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PhotosComponent } from './photos/photos.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'resources', component: ResourcesComponent},
    {path: 'team', component: TeamComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: 'photos', component: PhotosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
