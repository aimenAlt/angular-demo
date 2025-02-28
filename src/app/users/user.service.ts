import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  validateUser(user: User){
    // consume endpoint to validate the user
    if(user.userId == 1 && user.userPassword == "admin"){
      user.userName = "Sam";
      user.userType = "manager";
      user.userAddress = "Atlanta";
    } else if(user.userId == 2 && user.userPassword == "emp"){
      user.userName = "Priya";
      user.userType = "employee";
      user.userAddress = "Marietta";
    } 
    return user;
  }
}
