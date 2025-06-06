import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './vics/vics_layout/navbar/navbar.component';
import { SidebarComponent } from './vics/vics_layout/sidebar/sidebar.component';
import { MainlayoutComponent } from './vics/vics_layout/mainlayout/mainlayout.component';
import { FooterComponent } from './vics/vics_layout/footer/footer.component';
import { SafeurlPipe } from './pipe/safeurl.pipe';
import { FormsModule } from '@angular/forms';
import { CompletionpageComponent } from './vics/completionpage/completionpage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainlayoutComponent,
    FooterComponent,
    SafeurlPipe,
    CompletionpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
