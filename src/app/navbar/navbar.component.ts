// Imports the @Component annotation (decorator function) and the ngOnInit function 
import { Component, OnInit } from '@angular/core';
import { SomeClass } from '../someclass';

/* This decorator function specifies the Angualr metadata for THIS component. The CLI added
the selector, templateUrl, and styleUrl metadata properties for me.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
// A component must be exported before it can be imported by another module
export class NavbarComponent implements OnInit {

  // This is how I specify a property that can be interpolated in the html
  navProperty = "hello";

  // Here is a class instantiation 
  someClass: SomeClass = {
    id: 69,
    name: "I don't need this"
  } 

  constructor() { }

  // Lifecycle hook called shortly after this component's creation. Initialization logic goes here
  ngOnInit() {
  }

}
