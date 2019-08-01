 //************ Первая программа покупателя*/

import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-parent-3',
  templateUrl: './parent-3.component.html',
  styleUrls: ['./parent-3.component.css']
})
export class Parent3Component implements OnInit {

  condition:boolean = false;
    
  items =["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"]
  
  myExpression:number = 5;

  SwitchCount(){
      this.myExpression = ++this.myExpression%3;
  }
  toggle(){
      this.condition = !this.condition;
  }

  constructor(private logService: LogService){
  }


  ngOnInit() {
  }

}
