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
import { InstructotHomeComponent } from './instructot-home/instructot-home.component';
import { StudentModule } from '../student/student.module';
<<<<<<< HEAD
import { MatNativeDateModule } from '@angular/material/core';
=======
import { UpdateInstructorComponent } from './update-instructor/update-instructor.component';


>>>>>>> d9cfad692fbccaae1c0a6973cc3eec4f90bbd45f

@NgModule({
  declarations: [
    InstructorRegisterComponent,
    CardsOfInstructorsComponent,
    InstructotHomeComponent,
    UpdateInstructorComponent,   
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StudentModule,
    MatNativeDateModule,
  ],
  exports:
  [
    CardsOfInstructorsComponent
  ]
})
export class InstructorModule { }
