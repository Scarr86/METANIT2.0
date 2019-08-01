import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-chapter3',
  templateUrl: './chapter3.component.html',
  styleUrls: ['./chapter3.component.css']
})
export class Chapter3Component implements OnInit {

  constructor(private logService:LogService) { }

  ngOnInit() {
    this.logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');

  }

}
