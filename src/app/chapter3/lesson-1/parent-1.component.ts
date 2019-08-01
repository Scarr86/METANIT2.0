 //************ Первая программа покупателя*/

import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-parent-1',
  templateUrl: './parent-1.component.html',
  styleUrls: ['./parent-1.component.css']
})
export class Parent1Component implements OnInit {

  constructor(private logService: LogService){
}


isVerdana: boolean = true;
isSegoe: boolean = true;

isNavy: boolean = true;

visibility:boolean = false;

currentClasses = {
    verdataFont: this.isVerdana,
    navyColor: this.isNavy
}

toggle(){
    this.visibility = !this.visibility; 
}
  ngOnInit() {
  }

}
