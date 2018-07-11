import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
// A component must be exported before it can be imported by another module
export class NavbarComponent implements OnInit {

  nav_property: "hello";

  constructor() { }

  // Lifecycle hook called shortly after this component's creation. Initialization logic goes here
  ngOnInit() {
  }

}
