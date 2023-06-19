import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentHomeComponent } from './student-home/student-home.component';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { StudentRoutingModule } from './student-routing.module';
import { EnrollmentSuccessModelComponent } from './enrollment-success-model/enrollment-success-model.component';


@NgModule({
  declarations: [
    StudentRegisterComponent,
    StudentHomeComponent,
    EnrollmentSuccessModelComponent
  ],
  exports :[
    StudentRegisterComponent,
    StudentHomeComponent,
    EnrollmentSuccessModelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StudentRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class StudentModule { }
