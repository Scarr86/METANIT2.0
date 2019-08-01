
import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

 class User{
  name:string;
  email:string;
  phone:string;
}

@Component({
  selector: 'app-parent-2',
  templateUrl: './parent-2.component.html',
  styleUrls: ['./parent-2.component.css']
})
export class Parent2Component implements OnInit {

  user:User = new User();
    
    addUser(){
        this.logService.write(this.user.name);
        this.logService.write(this.user.email);
        this.logService.write(this.user.phone);
    }
  constructor(private logService: LogService) { }

  ngOnInit() {
  }

}
