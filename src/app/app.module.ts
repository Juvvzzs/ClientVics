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
import { HttpClientModule } from '@angular/common/http';
import { CompletionpageComponent } from './vics/completionpage/completionpage.component';
import { CitizenscharterComponent } from './vics/citizenscharter/citizenscharter.component';
import { SelectofficeComponent } from './vics/selectoffice/selectoffice.component';
import { CommonModule, DatePipe } from '@angular/common';
import { WelcompageComponent } from './vics/welcompage/welcompage.component';
import { UserinputComponent } from './vics/userinput/userinput.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainlayoutComponent,
    FooterComponent,
    SafeurlPipe,
    CompletionpageComponent,
    CitizenscharterComponent,
    SelectofficeComponent,
    WelcompageComponent,
    UserinputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],

  exports: [
    SafeurlPipe,
  ],

  providers: [
    DatePipe,
  //  {
     // provide: HTTP_INTERCEPTORS,
     // useClass: TokenInterceptor,
     // multi: true,
    //},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
