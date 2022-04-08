import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { ContentPageComponent } from './pages/content-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { AboutPageComponent } from './pages/about-page.component';
import { InsidePageComponent } from './pages/inside-page.component';
import { DetailsPageComponent } from './pages/details-page.component';
import { BreadcrumbComponent } from './breadcrumbs/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentPageComponent,
    HomePageComponent,
    AboutPageComponent,
    InsidePageComponent,
    DetailsPageComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
