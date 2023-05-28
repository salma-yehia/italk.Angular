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
        Validators.required //, Validators.pattern('^[a-zA-Z\s]+$')
      ]),
      Gender : new FormControl(null , [
        Validators.required 
      ]),
      Email : new FormControl(null , [
        Validators.required //, Validators.pattern(`/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`)
      ]),
      Age : new FormControl(null , [
        Validators.required 
      ]),
      PasswordHash : new FormControl(null , [
        Validators.pattern(`/^(?=.*[a-zA-Z]).+$/`)
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
    const genderValue = this.getGenderValue(this.registerForm.get('Gender')?.value);
    return genderValue;
  }
  get Age(){
    return this.registerForm.get('Age');
  }
  get PasswordHash(){
    return this.registerForm.get('PasswordHash');
  }
  get Level(){
    return this.registerForm.get('Level');
  }
  ngOnInit(): void {
  }

  registerData(): void {
    this.registerStudent.UserName=this.UserName?.value
    this.registerStudent.Gender=+this.Gender
    this.registerStudent.PasswordHash=this.PasswordHash?.value
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
  genderValues = Object.keys(Gender).filter(k => typeof Gender[k as any] === 'number');

  getGenderValue(gender: string): Gender {
    return this.genderEnum[gender as keyof typeof Gender];
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    return control?.errors != null && control?.touched;
  }
  
  isControlError(controlName: string, errorName: string): boolean {
    const control = this.registerForm.get(controlName);
    return control?.errors && control?.errors[errorName];
  }
  
}
