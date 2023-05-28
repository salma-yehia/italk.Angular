import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentHomeComponent } from './student-home/student-home.component';



@NgModule({
  declarations: [
    StudentRegisterComponent,
    StudentHomeComponent
  ],
  exports :[
    StudentRegisterComponent,
    StudentHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class StudentModule { }
