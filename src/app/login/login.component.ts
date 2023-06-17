import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup , Validators } from '@angular/forms';
import{Router} from '@angular/router';
import{AuthService} from 'src/app/services/auth.service'
import { Login } from '../models/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login:Login={} as Login;
  errorMessage:string="";
  Token:any = {};
  loginForm:FormGroup ;
  

  constructor(private fb:FormBuilder,private loginService:AuthService,private router : Router){
    this.loginForm=this.fb.group({
      Email : new FormControl(null , [
        Validators.required , Validators.email
      ]),
      Password : new FormControl(null , [
        Validators.pattern(`.*[A-Za-z].*`) , Validators.required
      ]),
    });

  }

  get Email(){
    return this.loginForm.get('Email');
  }
  get Password(){
    return this.loginForm.get('Password');
  }
  ngOnInit(): void {
  }

  submitLoginForm(): void {
    this.login.Password=this.Password?.value
    this.login.Email=this.Email?.value
    this.loginService.Login(this.login).subscribe({
      next: (data) => {
        this.Token=data

        localStorage.setItem('userToken' , this.Token.token);
        //console.log(data);
        this.loginService.saveUserData();
        
        // Redirect to /students route
        this.router.navigate(['/students']);
      },
      error: (err) => this.errorMessage = err
    });
  }

  
  isControlError(controlName: string, errorName: string): boolean {
    const control = this.loginForm.get(controlName);
    return control?.errors && control?.errors[errorName] && control?.touched;
  }

}
