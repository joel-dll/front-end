import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { OurNurseryComponent } from './our-nursery/our-nursery.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { StudentcrudComponent } from './studentcrud/studentcrud.component';

import { Contact2Component } from './contact2/contact2.component';
const routes: Routes = [
{ path: 'menu', component: MenuComponent },
{ path: 'contact2', component: Contact2Component },
{ path: 'our-nursery', component: OurNurseryComponent },
{ path: 'our-team', component: OurTeamComponent },
{ path: 'studentcrud', component: StudentcrudComponent },



{ path: '', redirectTo: '/menu', pathMatch: 'full' } // redirect to `/menu` as a default route];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
