import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import jwt_decode from 'jwt-decode';

enum Gender {
  Male = 1,
  Female = 2,
}
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  updateStudent:Student={} as Student;
  errorMessage:string="";
  userId : number = 0;
  
  updateForm:FormGroup ;
  

  constructor(private fb:FormBuilder,private studentService:StudentService,private router : Router){
    this.updateForm=this.fb.group({
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
    return this.updateForm.get('UserName');
  }
  get Email(){
    return this.updateForm.get('Email');
  }
  get Gender() {
    return this.updateForm.get('Gender');  }
  get Age(){
    return this.updateForm.get('Age');
  }
  get Password(){
    return this.updateForm.get('Password');
  }
  get Level(){
    return this.updateForm.get('Level');
  }

    updateData(): void {
    this.updateStudent.userName=this.UserName?.value
    this.updateStudent.gender=+this.Gender?.value
    this.updateStudent.password=this.Password?.value
    this.updateStudent.level=this.Level?.value
    this.updateStudent.age=this.Age?.value
    this.updateStudent.email=this.Email?.value

    this.studentService.updateStudentById(this.userId , this.updateStudent).subscribe({
      next: (data) => {
        console.log(data);
        // Redirect to /students route
        this.router.navigate(['/students']);
      },
      error: (err) => this.errorMessage = err
    });
  }
    ngOnInit(): void {
      const token = localStorage.getItem('userToken');
      if (token) {
        const decodedToken: any = jwt_decode(token);
        this.userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
}
  }
  genderEnum = Gender;
  genderValues = Object.keys(Gender).filter(k => !isNaN(+k));
  
  isControlError(controlName: string, errorName: string): boolean {
    const control = this.updateForm.get(controlName);
    return control?.errors && control?.errors[errorName] && control?.touched;
  }
}


