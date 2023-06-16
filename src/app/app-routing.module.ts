import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  {  path: 'students',
  loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
  },
  {  path: 'instructors',
  loadChildren: () => import('./instructor/instructor.module').then(m => m.InstructorModule)
  },
  {  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
