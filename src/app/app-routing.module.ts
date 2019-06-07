import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'resources', component: ResourcesComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
