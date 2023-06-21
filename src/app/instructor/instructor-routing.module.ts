import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';
import { InstructotHomeComponent } from './instructot-home/instructot-home.component';
import { UpdateInstructorComponent } from './update-instructor/update-instructor.component';

const routes: Routes = [
  { path: '', canActivate:[AuthGuard],component: InstructotHomeComponent },
  { path: 'create', component: InstructorRegisterComponent },
  { path: 'update', component: UpdateInstructorComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
