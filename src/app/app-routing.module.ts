import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { StudentModule } from './student/student.module';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  {  path: 'students',
  loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
},
  { path: 'students/create', component: StudentRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
