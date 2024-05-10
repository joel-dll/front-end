import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentcrudComponent } from './studentcrud/studentcrud.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './menu/menu.component';
import { OurNurseryComponent } from './our-nursery/our-nursery.component';
import { OurTeamComponent } from './our-team/our-team.component';

import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentcrudComponent,
    MenuComponent,
    OurNurseryComponent,
    OurTeamComponent,
    ContactFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

