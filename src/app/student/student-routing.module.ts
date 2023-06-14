import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { StudentRegisterComponent } from './student-register/student-register.component';

const routes: Routes = [
  { path: '',  component : StudentRegisterComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class StudentRoutingModule { }
