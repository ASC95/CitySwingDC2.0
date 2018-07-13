// This is the root module

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// When I use $ ng generate component {name} $ to create components, they're added here automatically!
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


/* This decorator function marks this class as a module. 
This single metadata object has properties of the module.
*/
@NgModule({
  // These are the components, directives, and pipes that belong to this module
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  // These are other modules whose classes are needed by THIS module's component templates
  imports: [
    BrowserModule
  ],
  /* These are creators of services that this module adds to the global pool of available services
  Providers can also be specified at the component level, which is often preferred. 
  Any providers injected into the root NgModule are present in the root injector.
  */
  /* None of the posts have shown me anything, so I must be misunderstanding something fundamental here */
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
