import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.comp.html',
  styleUrls: ['./pipes.comp.css']
})
export class PipesComponent implements OnInit {

  myDate: Date = new Date();
  welcom: string = "Hellow World!";
  myNumber: number = 5;

  arrStr: string[] = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];

  constructor(private http: HttpClient) {

  }

  ngOnInit() { }

  onClickDate(date: Date) {
    date = new Date(date);
    date.setDate(5);
    this.myDate = date;
    interval
  }

  //AsyncPipe
  obsArrStr: Observable<string>;

  showArrStr() {
    this.obsArrStr = interval(500).pipe(map(i => this.arrStr[i]));
  }

  //Пример
  users: Observable<Object>;

  showUsers() {
    this.users =
      this.http.get('/assets/users.json')
        .pipe(map(users => {
          let userList = users['userList'];
          console.log(userList);
          return userList;
        }));
  }
}