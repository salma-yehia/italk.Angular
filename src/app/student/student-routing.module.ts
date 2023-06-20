import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { CardsOfInstructorsComponent } from '../instructor/cards-of-instructors/cards-of-instructors.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path : '' , canActivate:[AuthGuard], component : CardsOfInstructorsComponent},
  { path: 'create', component: StudentRegisterComponent },
  { path: 'studentHome', component: StudentHomeComponent },
  {path:'update',component:UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
