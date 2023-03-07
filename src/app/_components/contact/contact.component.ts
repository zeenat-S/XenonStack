import { Component, OnInit } from '@angular/core';
import { faBars, faShoppingCart, faBell, faTShirt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';

declare let Email: any;



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
  faCaretRight = faCaretRight

  form!: FormGroup;

  phone = "9999977777"

  constructor(private builder: FormBuilder, private copy:ClipboardService) { }



  ngOnInit(): void {
    this.form = this.builder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      name: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    })

  }
  onSubmit() {
    console.log("sending..")
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'timepass3234@gmail.com',
      Password: 'A334F4132F0FDCE19C32AE79644AAB9017A0',
      To: 'timepass3234@gmail.com',
      From: "timepass3234@gmail.com",
      Subject: "From:" + this.form.value.name + " | " + this.form.value.subject,
      Body: "\nName: " + this.form.value.name + " \nEmail: " + this.form.value.email + " \nSubject: " + this.form.value.subject + " \nBody:" + this.form.value.body
    }).then(() => { alert("Your message has been sent! Thank You for contacting us. We will get back to you ASAP!"); this.form.reset(); });
  }


  toggle() {

    this.showMenu = !this.showMenu
  }

  copyPhone(){
    this.copy.copyFromContent(this.phone)
  }

}
