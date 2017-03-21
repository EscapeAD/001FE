import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadComponent } from './head/head.component';
import { VisionComponent } from './vision/vision.component';
import { TeamComponent } from './team/team.component';
import { ThreeBadgesComponent } from './three-badges/three-badges.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadComponent,
    VisionComponent,
    TeamComponent,
    ThreeBadgesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
