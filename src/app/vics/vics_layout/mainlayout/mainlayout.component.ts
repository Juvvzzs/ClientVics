import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CitizenscharterComponent } from '../../citizenscharter/citizenscharter.component';

@Component({
  standalone: true,
  imports: [
      NavbarComponent,
      SidebarComponent,
      CitizenscharterComponent
  ],
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent {

}
