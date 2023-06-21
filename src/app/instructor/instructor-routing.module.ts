import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';
import { InstructotHomeComponent } from './instructot-home/instructot-home.component';
import { UpdateInstructorComponent } from './update-instructor/update-instructor.component';

const routes: Routes = [
  { path: '', canActivate:[AuthGuard],component: InstructotHomeComponent },
  { path: 'create', component: InstructorRegisterComponent },
  { path: 'update/:id', component: UpdateInstructorComponent },
  { path: 'details/:id', component: InstructorDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
