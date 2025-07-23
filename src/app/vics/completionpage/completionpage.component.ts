import { Component , OnInit} from '@angular/core';
import { NavbarComponent } from '../vics_layout/navbar/navbar.component';
import { FooterComponent } from '../vics_layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports:[
    NavbarComponent,
    FooterComponent,
    FormsModule,
    RouterModule,
    NgIf
  ],
  selector: 'app-completionpage',
  templateUrl: './completionpage.component.html',
  styleUrls: ['./completionpage.component.css']
})

export class CompletionPageComponent {
  withCertificate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.withCertificate = nav?.extras?.state?.['withCertificate'] ?? false;
  }
}
