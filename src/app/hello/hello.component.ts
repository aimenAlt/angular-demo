import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  message = "";
  flag = true;

  constructor() { }

  ngOnInit(): void {
  }

  display(){
    if(this.flag){
      this.message = "Good Evening!!";
      this.flag = false;
    }else{
      this.message = "";
      this.flag = true;
    }
    
  }

}
