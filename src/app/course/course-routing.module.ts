import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  // { path: '', canActivate:[AuthGuard],component: InstructotHomeComponent },
  { path: 'create', component: AddCourseComponent},
  // { path: 'update/:id', component: UpdateInstructorComponent },
  // { path: 'details/:id', component: InstructorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
