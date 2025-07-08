import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],

  exports: [
   
  ],

  providers: [
    DatePipe,
  //  {
     // provide: HTTP_INTERCEPTORS,
     // useClass: TokenInterceptor,
     // multi: true,
    //},
  ],
  bootstrap: [
  ]
})
export class AppModule { }
