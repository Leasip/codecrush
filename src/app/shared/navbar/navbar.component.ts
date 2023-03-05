import { Component } from '@angular/core';
// import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  styles : ['div > a.active {color: black;background-color: #00b4ba;box-shadow: 0 0 10px #008cff;}']
})
export class NavbarComponent {

}