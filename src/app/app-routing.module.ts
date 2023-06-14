import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorRegisterComponent } from './instructor/instructor-register/instructor-register.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  {  path: 'students',
  loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
},
  { path: 'students/create', component: StudentRegisterComponent },

  {  path: 'instructors',
  loadChildren: () => import('./instructor/instructor.module').then(m => m.InstructorModule)
},
  { path: 'instructors/create', component: InstructorRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
