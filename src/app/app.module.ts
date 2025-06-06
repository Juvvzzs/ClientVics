import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './vics/vics_layout/navbar/navbar.component';
import { SidebarComponent } from './vics/vics_layout/sidebar/sidebar.component';
import { MainlayoutComponent } from './vics/vics_layout/mainlayout/mainlayout.component';
import { FooterComponent } from './vics/vics_layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainlayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
