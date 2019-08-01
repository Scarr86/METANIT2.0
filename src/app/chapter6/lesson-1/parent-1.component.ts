import { Component, OnInit } from '@angular/core';
// Напрямую в компоненте
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from './user';
// Через сервис 
import { HttpService } from './HttpClient/htpp.service';

//Observable-rsjs
import { HttpServiceObs } from './Observable-rxjs/http-observable.service';
import { map } from 'rxjs/operators';
import { LogService } from 'src/app/log.service';


@Component({
  selector: 'app-parent-1',
  templateUrl: './parent-1.component.html',
  styleUrls: ['./parent-1.component.css'],
  providers: [HttpService, HttpServiceObs],
})
export class Parent1Component implements OnInit {

  user: User;

  userNum: number;
  userType: string;

  users: User[] = [];

  error: any;


  num: number = 0;

    constructor(private http: HttpClient, private httpService: HttpService, private httpServiceObs: HttpServiceObs, private logService:LogService) {
    // logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
  }


  ngOnInit() {
    const params:HttpParams = new HttpParams().set("number", Number(10).toString());
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
const options = { headers: headers };

    // Напрямую в компоненте
    this.http.get('/assets/user.json').subscribe(
    (data: User) => {
      this.user = data;
    },
    );

    // Через сервис 
    this.httpService.getData().subscribe((data: User[]) => {
      console.log(data);
      this.users = data['userList']
    });

    //Observable-rsjs
    this.httpServiceObs.getUsers().subscribe((data: User[]) => {
      this.users = data;
      this.userNum = User.num;
      this.userType = User.type;
    })


  }

  getUsersWhithError() {
    this.httpServiceObs.getUsersWhithError().subscribe(
      (data) => console.log(data),
      er => {
        this.error = er.message;
        console.log("Из компонента L10-interaction-server:", er);
      }
    );
  }


  getNumber() {

    this.httpService.getDataParam(11)
      .subscribe(
        data => { console.log(data); },
        er => {
          console.log(er);
        });

    //Пример как в json ответе отправлять не только обекты, тут просто чило из number.json
    this.http.get('assets/number.json')
      .pipe(map((num: number) => num *= 2))
      .subscribe((num: number) => { console.log(num); this.num += num; });

  }

}
