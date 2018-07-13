import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Import the components that I want the router to be able to navigate to
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';

/* Best practice is to use a top-level (i.e. root) module to configure the router. This class is conventionally called 
AppRoutingModule, and is located directly in the src/app folder. */

const routes: Routes = [
  // I can set the default path to whatever I want. If the path is empty, the browser redirects
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent }
];

@NgModule({
  // I'm not sure what forRoot() does. Online explanations are pretty complex. But I do need it.
  imports: [ RouterModule.forRoot(routes) ],
  // Exporting RouterModule makes router directives available for use inside of AppModule components that need them
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
