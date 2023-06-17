import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsOfInstructorsComponent } from './cards-of-instructors/cards-of-instructors.component';



@NgModule({
  declarations: [
    InstructorRegisterComponent,
    CardsOfInstructorsComponent,   
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:
  [
    CardsOfInstructorsComponent
  ]
})
export class InstructorModule { }
