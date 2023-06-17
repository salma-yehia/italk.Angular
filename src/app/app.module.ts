import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { InstructorModule } from './instructor/instructor.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
    AuthenticationModule,
    BrowserAnimationsModule,
    InstructorModule
=======
    BrowserAnimationsModule
>>>>>>> 4f436acb65a714c5b9f2753855c15db597745d57
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
