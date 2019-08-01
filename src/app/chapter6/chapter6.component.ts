import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-chapter6',
  templateUrl: './chapter6.component.html',
  styleUrls: ['./chapter6.component.css']
})
export class Chapter6Component implements OnInit {

  constructor(private logService : LogService) { }

  ngOnInit() {
    this.logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
  }

}
