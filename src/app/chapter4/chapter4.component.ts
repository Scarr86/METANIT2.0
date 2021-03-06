import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-chapter4',
  templateUrl: './chapter4.component.html',
  styleUrls: ['./chapter4.component.css']
})
export class Chapter4Component implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');

  }

}
