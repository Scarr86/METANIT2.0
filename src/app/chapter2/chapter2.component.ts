import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.css']
})
export class Chapter2Component implements OnInit {

  constructor(private logService:LogService) {  }

  ngOnInit() {
    this.logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');

  }

}
