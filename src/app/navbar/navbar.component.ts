import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{AuthService} from 'src/app/services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLogin : boolean = false;
constructor(private loginService:AuthService,private router : Router){}
ngOnInit(): void {
  this.loginService.userData.subscribe(() =>{
    if(this.loginService.userData.getValue()!=null){
      this.isLogin = true;
    }else{
      this.isLogin = false; 
    }
  })
}
logout(){
  this.loginService.Logout();
}
}
