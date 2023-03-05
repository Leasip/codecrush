import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  styles : ['div > a.active {color: red;}']
})
export class NavbarComponent {

}