 //************ Первая программа покупателя*/

import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-parent-3',
  templateUrl: './parent-3.component.html',
  styleUrls: ['./parent-3.component.css']
})
export class Parent3Component implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    //Не будет работатть потому что изменения отслеживаются только в дочерних компонентах
    for (let propName in changes) {
        let chng = changes[propName];
        let cur = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
        this.log(`PARENT:${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
}
private log(msg: string) {
    console.log(msg);
}

}
