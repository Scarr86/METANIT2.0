import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

// LESSON 1  Итерполяция и Как свезать свойства и атрибуты
@Component({
  selector: 'app-parent-1',
  templateUrl: './parent-1.component.html',
  styleUrls: ['./parent-1.component.css']
})
export class Parent1Component implements OnInit {

  myName: string = 'MyName';
  colspan: number = 3;
  count: number = 0;
  radius: string = 'wrapper';
  isRed: boolean = true;

  style: string = 'background-color: red;';

  isShowBall: boolean = false;

  constructor(private logService: LogService) {
  }

  increase(): void;
  //: void {
  //     this.count++;
  // }
  increase($event?: MouseEvent): void {
    this.count++;
    console.log($event instanceof MouseEvent);
    if (typeof $event !== "undefined") console.log($event);
  }
  addRound() {
    if (this.radius.indexOf("radius") == -1)
      this.radius += " radius";
    else
      this.radius = this.radius.replace("radius", '');
  }


  ngOnInit() {
  }

  onClick() {
    // this.showCircle(150, 150, 100, (ball: HTMLElement) => {
    //   ball.append("Hellow World");
    // });
    this.showCircle(150, 150, 100).then(
      (ball: HTMLElement) => {
        ball.textContent = "Hello World!";
      }
    );
  }

  showCircle(cx, cy, radius, callback?) {
    let ball = document.getElementById("ball");
    
    ball.style.width = 0 + 'px';
    ball.style.height = 0 + 'px';
    ball.style.top = cx + 'px';
    ball.style.left = cy + 'px';
    ball.style.background = "tomato";

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        ball.style.width = radius * 2 + 'px';
        ball.style.height = radius * 2 + 'px';
        ball.style.background = "green";
        ball.textContent = "";

        ball.addEventListener('transitionend', function handler() {
          ball.removeEventListener('transitionend', handler);
          resolve(ball);
        });

      }, 2000);
    });

    setTimeout(() => {
      ball.style.width = radius * 2 + 'px';
      ball.style.height = radius * 2 + 'px';
      ball.addEventListener('transitionend', function handler() {
        ball.removeEventListener('transitionend', handler);
        callback(ball);
      })
    }, 2000);
  }

}
