// This is the root module

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// When I use $ ng generate component {name} $ to create components, they're added here automatically!
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';


/* This decorator function marks this class as a module. This single metadata object has properties of the module. */
@NgModule({
  // These are the components, directives, and pipes that belong to this module
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ScheduleComponent
  ],
  // These are other modules whose classes are needed by THIS module's component templates
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  /* These are creators of services that this module adds to the global pool of available services
  Providers can also be specified at the component level, which is often preferred. 
  Any providers injected into the root NgModule are present in the root injector.
  */
  /* @NgModule.providers are registered with the application's root injector. Angular can inject the corresponding services into any class
  that it creates. A created service exists for the entire lifetime of the app, and Angular injects the same instance into every class that
  needs it.
 /* Any service is just a class until it is registered with an Angular dependency injector. An injector creates service instances 
 and injects them into components that use them. Angular creates injectors for me, starting with the root injector. providers tell Angular
 how I want to create service instances AND which injector is responsible. */
 /* Here, the "Title" class is registered under the "Title" injection token. Now Angular can inject the "Title" class into any class
 that it creates. */
  providers: [
    Title
  ],
  /* Only the root module has this property. This is the main application view that hosts all other app views.
  Angular creates this and inserts it into index.html in the browser
  */
  bootstrap: [AppComponent]
  // There is no exports section
})
export class AppModule { }
