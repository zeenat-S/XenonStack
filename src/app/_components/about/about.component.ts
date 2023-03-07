import { Component, OnInit } from '@angular/core';
import { faBars, faShoppingCart, faBell, faTShirt,faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
  faCaretRight=faCaretRight;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {

    this.showMenu = !this.showMenu
  }

}
