 //************ Первая программа покупателя*/

import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-parent-2',
  templateUrl: './parent-2.component.html',
  styleUrls: ['./parent-2.component.css']
})
export class Parent2Component implements OnInit {

  constructor(private logService: LogService){
}



  ngOnInit() {
  }

}
