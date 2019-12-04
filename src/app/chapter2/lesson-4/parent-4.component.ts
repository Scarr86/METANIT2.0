//************ Первая программа покупателя*/

import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Child4Component } from "./child/child-4.component";

@Component({
  selector: "app-parent-4",
  templateUrl: "./parent-4.component.html",
  styleUrls: ["./parent-4.component.css"]
})
export class Parent4Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  // Привязка к метадам встроеного компонента ChildL4Component тоже используется @ViewChild
  @ViewChild(Child4Component, { static: false })
  private counterComponent: Child4Component;
  inc() {
    this.counterComponent.increment();
  }
  dec() {
    this.counterComponent.decrement();
  }

  nameL4 = "Joj";
  //Привязка ViewChild к шаблонным переменным "nameText"
  @ViewChild("nameText", { static: true }) nameParagraph: ElementRef;

  changeL4() {
    console.log("L4 " + this.nameParagraph.nativeElement.textContent);
    this.nameParagraph.nativeElement.textContent = "hell";
  }
}
