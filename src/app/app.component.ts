/* This file represents an Angular component. A component is spread across three files: .ts, .html. and .css. */
import { Component } from '@angular/core';
//import { Title } from '@angular/platform-browser';


/* This decorator identifies that "AppComponent" as a component class. This metadata tells Angular where to get building
blocks to present the components and its views */
@Component({
  // Wherever this tag <app-root></app-root> is found in HTML, an instance of this component will be inserted
  selector: 'app-root',
  // Module-relative address of this component's HTML template. This is the component's host view
  templateUrl: './app.component.html',
  // Module-relative address of this component's css
  styleUrls: ['./app.component.css']
  // This defines services that this component's constructor needs to intantiate. Remember to import it!
  //providers: [Title]
})
export class AppComponent {

  title = 'CitySwingDC title';

  //public constructor() {}

  /* A service always needs to be injected into the constructor of its component */
  //public constructor(private whatever: Title ) { 
  //  this.whatever.setTitle("CitySwingDC");
  //}

}
