import { Component, OnInit, ContentChild, ElementRef } from "@angular/core";
import { LogService } from "src/app/log.service";

@Component({
  selector: "app-child-4",
  templateUrl: "./child-4.component.html",
  styleUrls: ["./child-4.component.css"]
})
export class Child4Component implements OnInit {
  counter: number = 0;

  constructor(private logService: LogService) {}

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

  @ContentChild("headerContent", { static: false })
  header: ElementRef;

  change() {
    console.log("changeL4() " + this.header);
    if (this.header) this.header.nativeElement.textContent += " Kok";
  }
  ngOnInit() {}
}
