import { Component } from '@angular/core';
import { Router, RouterModule  } from '@angular/router';
import { NavbarComponent } from '../vics_layout/navbar/navbar.component';
import { FooterComponent } from '../vics_layout/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
   imports: [
        NavbarComponent,
        FooterComponent,
        FormsModule,
        RouterModule
    ],
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
