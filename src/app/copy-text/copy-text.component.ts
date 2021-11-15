import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-text',
  templateUrl: './copy-text.component.html',
  styleUrls: ['./copy-text.component.css']
})
export class CopyTextComponent implements OnInit {
  text1 = "";
  text2 = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  copy(){
    if(this.text1 != ""){
      this.text2 = this.text1;
    }else if(this.text2 != ""){
      this.text1 = this.text2;
    }
  }

  clear(){
    this.text1 = "";
    this.text2 = "";
  }
}
