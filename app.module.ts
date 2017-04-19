import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Lab14Component } from './lab14.component';
import { UpperDirective } from './upper.directive';
 

@NgModule({
  declarations: [
    AppComponent,
    Lab14Component,
    UpperDirective
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
