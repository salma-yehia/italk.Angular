import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

 

enum Gender {
  Male = 1,
  Female = 2,
}

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})

export class StudentRegisterComponent implements OnInit {
  registerStudent:Student={} as Student;
  errorMessage:string="";
  
  
  registerForm:FormGroup ;
  

  constructor(private fb:FormBuilder,private studentService:StudentService,private router : Router){
    this.registerForm=this.fb.group({
      UserName : new FormControl(null , [
        Validators.required , Validators.pattern(`^[A-Za-z0-9]*$`)
      ]),
      Gender : new FormControl(null , [
        Validators.required 
      ]),
      Email : new FormControl(null , [
        Validators.required , Validators.email
      ]),
      Age : new FormControl(null , [
        Validators.required 
      ]),
      Password : new FormControl(null , [
        Validators.pattern(`.*[A-Za-z].*`) , Validators.required
      ]),
      Level : new FormControl(null , [
        Validators.required 
      ]),    
    });

  }

  get UserName(){
    return this.registerForm.get('UserName');
  }
  get Email(){
    return this.registerForm.get('Email');
  }
  get Gender() {
    return this.registerForm.get('Gender');  }
  get Age(){
    return this.registerForm.get('Age');
  }
  get Password(){
    return this.registerForm.get('Password');
  }
  get Level(){
    return this.registerForm.get('Level');
  }
  ngOnInit(): void {
  }

  registerData(): void {
    this.registerStudent.UserName=this.UserName?.value
    this.registerStudent.Gender=+this.Gender?.value
    this.registerStudent.Password=this.Password?.value
    this.registerStudent.Level=this.Level?.value
    this.registerStudent.Age=this.Age?.value
    this.registerStudent.Email=this.Email?.value

    console.log(this.registerStudent);
    this.studentService.createStudent(this.registerStudent).subscribe({
      next: (data) => {
        console.log(data);
        // Redirect to /students route
        this.router.navigate(['/students']);
      },
      error: (err) => this.errorMessage = err
    });
  }

  genderEnum = Gender;
  genderValues = Object.keys(Gender).filter(k => !isNaN(+k));
  
  isControlError(controlName: string, errorName: string): boolean {
    const control = this.registerForm.get(controlName);
    return control?.errors && control?.errors[errorName] && control?.touched;
  }
  
}
