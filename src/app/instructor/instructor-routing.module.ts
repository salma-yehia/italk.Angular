import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';

const routes: Routes = [
  { path: '',  component : InstructorRegisterComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
