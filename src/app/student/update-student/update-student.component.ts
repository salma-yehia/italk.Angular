import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent  {
  updateStudentForm: FormGroup;
  studentId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {
    this.updateStudentForm = this.formBuilder.group({
      userName: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      level: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  updateStudent(): void {
    if (this.updateStudentForm.invalid) {
      return;
    }
    
    const token = localStorage.getItem('userToken');
if (token) {
  const decodedToken: any = jwt_decode(token);
  const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  console.log(userId);
  const updatedStudent: Student = {
    userName: this.updateStudentForm.get('userName')?.value,
    gender: this.updateStudentForm.get('gender')?.value,
    age: this.updateStudentForm.get('age')?.value,
    level: this.updateStudentForm.get('level')?.value,
    id:userId,
    email: "undefined",
    password: "undefined"
  };
  // Assuming you have the updated student data available in the 'updatedStudent' variable
  this.studentService.updateStudentById(userId, updatedStudent).subscribe(
    (response: Student[]) => {
      // Handle the response if needed
      console.log('Student updated successfully:', response);
    },
    (error: any) => {
      console.error('An error occurred while updating the student:', error);
    }
  );
}

  }
}


