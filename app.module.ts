import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Lab12Component } from './lab12.component';
import { UpperDirective } from './upper.directive';
import { MyvisbilityDirective } from './myvisbility.directive';
import { MycolorDirective } from './mycolor.directive';
 

@NgModule({
  declarations: [
    AppComponent,
    Lab12Component,
    UpperDirective,
    MyvisbilityDirective,
    MycolorDirective
   
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
