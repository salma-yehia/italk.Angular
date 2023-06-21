import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{AuthService} from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';
import { InstructorService } from '../services/instructor.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLogin : boolean = false;
role: string | undefined;
userId : number = 0;
errorMessage:string="";


constructor(private loginService:AuthService,private router : Router , private instructorService : InstructorService , private studentService : StudentService){}
ngOnInit(): void {
  this.loginService.userData.subscribe(() =>{
    if(this.loginService.userData.getValue()!=null){
      this.isLogin = true;
      const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      this.role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      this.userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      console.log(this.role);
    }
    }else{
      this.isLogin = false; 
    }
  })
}
logout(){
  this.loginService.Logout();
}
updateInstructor(){
  this.instructorService.GetInstructorById(this.userId).subscribe({

    next: (data) => {
    console.log(data);
    
    // Redirect to /instructors/update route
    this.router.navigate(['/instructors/update', this.userId]);
  },
  error: (err) => this.errorMessage = err
});
}

updateStudent(){
  this.studentService.GetStudentById(this.userId).subscribe({

    next: (data) => {
    console.log(data);
    
    // Redirect to /instructors/update route
    this.router.navigate(['/students/update', this.userId]);
  },
  error: (err) => this.errorMessage = err
});
}
}
