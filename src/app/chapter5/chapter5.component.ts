import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-chapter5',
  templateUrl: './chapter5.component.html',
  styleUrls: ['./chapter5.component.css']
})
export class Chapter5Component implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');

  }

}
