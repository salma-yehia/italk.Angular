import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './student-home/guard/auth.guard';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { CardsOfInstructorsComponent } from '../instructor/cards-of-instructors/cards-of-instructors.component';

const routes: Routes = [
  {path : '' , canActivate:[AuthGuard], component : CardsOfInstructorsComponent},
  { path: 'create', component: StudentRegisterComponent },
  // { path: 'instructorCards', component: CardsOfInstructorsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
