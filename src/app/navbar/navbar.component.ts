import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{AuthService} from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLogin : boolean = false;
role: string | undefined;

constructor(private loginService:AuthService,private router : Router){}
ngOnInit(): void {
  this.loginService.userData.subscribe(() =>{
    if(this.loginService.userData.getValue()!=null){
      this.isLogin = true;
      const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      this.role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
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
}
