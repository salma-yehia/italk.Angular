import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';



@NgModule({
  declarations: [
    InstructorRegisterComponent
  ],
  exports:[
    InstructorRegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InstructorModule { }
