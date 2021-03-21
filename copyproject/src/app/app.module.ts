import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

// angular imports
import { MatButtonModule } from '@angular/material/button'
// import { MatCardModule } from '@angular/material/card'





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatCardModule
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
