import { Component, OnInit, DoCheck, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, Input } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-child-3',
  templateUrl: './child-3.component.html',
  styleUrls: ['./child-3.component.css']
})
export class Child3Component implements OnInit,
OnDestroy,
DoCheck,
OnChanges,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
AfterViewInit {
@Input() name = "Tom";
@Input() surname = "gggg";
@Input() isLog: boolean = false;


count: number = 1;

constructor(private logService: LogService) {
}


ngOnDestroy() { this.log('onDestroy child 2') }

// ngOnChanges(changes: SimpleChanges) {
//     for (let propName in changes) {
//         let chng = changes[propName];
//         let cur = JSON.stringify(chng.currentValue);
//         let prev = JSON.stringify(chng.previousValue);
//         this.log(`CHILD: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
//     }
// }

ngOnInit() {
  if (this.isLog)
    this.log(`L3 ngOnInit`);
}
ngOnChanges() {
  if (this.isLog)
    this.log(`L3 OnChanges`);
}
ngDoCheck() {
  if (this.isLog)
    this.log(`L3 ngDoCheck`);
}
ngAfterViewInit() {
  if (this.isLog)
    this.log(`L3 ngAfterViewInit`);
}
ngAfterViewChecked() {
  if (this.isLog)
    this.log(`L3 ngAfterViewChecked`);
}
ngAfterContentInit() {
  if (this.isLog)
    this.log(`L3 ngAfterContentInit`);
}
ngAfterContentChecked() {
  if (this.isLog)
    this.log(`L3 ngAfterContentChecked`);
}

private log(msg: string) {
  console.log(this.count + ". " + msg);
  this.count++;
}
}