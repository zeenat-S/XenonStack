import { Component, OnInit } from '@angular/core';
import { faBars, faShoppingCart, faBell, faTShirt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  showMenu = false;
  notification = false;
  profile = false;
  faBars = faBars;
  faCart = faShoppingCart;
  faBell = faBell;
  faTShirt = faTShirt
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faPinterest = faPinterest;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {

    this.showMenu = !this.showMenu
  }

  toggleNotifications() {
    this.notification = !this.notification
    
  }

  toggleProfile() {
    this.profile = !this.profile;
    
  }
}
