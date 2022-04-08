import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page.component';
import { ContentPageComponent } from './pages/content-page.component'
import { DetailsPageComponent } from './pages/details-page.component';
import { HomePageComponent } from './pages/home-page.component'
import { InsidePageComponent } from './pages/inside-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { breadcrumb: 'Home' } },
  { path: 'home/about', component: AboutPageComponent, data: { breadcrumb: 'About' } },
  { path: 'inside', component: InsidePageComponent, data: { breadcrumb: 'Inside' } },
  { path: 'inside/content', component: ContentPageComponent, data: { breadcrumb: 'Content' } },
  { path: 'inside/details', component: DetailsPageComponent, data: { breadcrumb: 'Details' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
