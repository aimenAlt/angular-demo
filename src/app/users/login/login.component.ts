import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = new User();
  
  // userName = "";
  // password = "";

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

    
  }

  validateLogin(){
    // if(this.userName == "admin" && this.password == "admin"){
    //   console.log("login successfull");
    // } else{
    //   console.log("login failed");
    // }
    var validatedUser: User = this.userService.validateUser(this.newUser);
    if(validatedUser.userType != "" ){
      this.authService.storeUser(validatedUser);
      this.authService.isLoggedIn = true;

    }
    if(validatedUser.userType == "employee" ){
      this.router.navigate(['hello']);
    }else if(validatedUser.userType == "manager" ){
      this.router.navigate(['book-info']);
    }
  }
}
