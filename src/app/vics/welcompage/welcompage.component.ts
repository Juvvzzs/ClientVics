import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcompage',
  templateUrl: './welcompage.component.html',
  styleUrls: ['./welcompage.component.css']
})
export class WelcompageComponent {
 showModal = false;
  accepted = false;

  constructor(private router: Router) {}

  acceptTerms() {
    this.showModal = false;
    this.accepted = false; 
    this.router.navigate(['user-information']);
  }
}
