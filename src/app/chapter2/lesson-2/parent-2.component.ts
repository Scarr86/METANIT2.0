import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-2',
  templateUrl: './parent-2.component.html',
  styleUrls: ['./parent-2.component.css']
})
export class Parent2Component implements OnInit {
  clicks: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onChanged(inc: any) {
    if (inc) this.clicks++
    else this.clicks--;
  }

}
