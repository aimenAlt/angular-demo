import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = "";
  password = "";

  constructor() { }

  ngOnInit(): void {

    
  }

  validateLogin(){
    if(this.userName == "admin" && this.password == "admin"){
      console.log("login successfull");
    } else{
      console.log("login failed");
    }

  }
}
