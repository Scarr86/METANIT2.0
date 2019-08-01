import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

// LESSON 1  Итерполяция и Как свезать свойства и атрибуты
@Component({
  selector: 'app-parent-1',
  templateUrl: './parent-1.component.html',
  styleUrls: ['./parent-1.component.css']
})
export class Parent1Component implements OnInit {

  myName: string = 'MyName';
  colspan: number = 3;
  count: number = 0;
  radius: string = 'wrapper';
  isRed:boolean = true;

  style:string = 'background-color: red;';

  constructor(private logService: LogService){
  }

  increase(): void;
  //: void {
  //     this.count++;
  // }
  increase($event?: MouseEvent): void {
      this.count++;
      console.log($event instanceof MouseEvent);
      if (typeof $event !== "undefined") console.log($event);
  }
  addRound() {
      if (this.radius.indexOf("radius") == -1)
      this.radius += " radius";
      else
      this.radius = this.radius.replace("radius", '');
  }

  
  ngOnInit() {
  }

}
