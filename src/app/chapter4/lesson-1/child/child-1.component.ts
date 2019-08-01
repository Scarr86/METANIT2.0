import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {LogService} from '../../../log.service';

@Component({
  selector: 'app-child-1',
  templateUrl: './child-1.component.html',
  styleUrls: ['./child-1.component.css'],
  providers: [DataService, LogService ]
  // использеут серви для каждого компонента отдельно,
    // поэтому мы сервисы добавили в app.module.ts сделали глобальныеми
    // теперь все созданные компоненты будут отбращатся к одному сервису

})
export class Child1Component implements OnInit {

  items: string[] = [];
  constructor(private dataService:DataService){
  }

  ngOnInit(){
      this.items = this.dataService.getData();
  }
  addItem(name: string){
      this.dataService.addData(name);
  }

}
