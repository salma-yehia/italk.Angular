import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentRegisterComponent } from './student-register/student-register.component';

const routes: Routes = [
  {path : '' , component : StudentHomeComponent},
  { path: 'create', component: StudentRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
