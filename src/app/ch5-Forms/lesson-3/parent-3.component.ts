
import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';
import { NgForm } from '@angular/forms';


class User{
  name:string;
  email:string;
  phone:string;
}

@Component({
  selector: 'app-parent-3',
  templateUrl: './parent-3.component.html',
  styleUrls: ['./parent-3.component.css']
})
export class Parent3Component implements OnInit {
  user: User = new User();
  constructor(private logService: LogService) { }

  ngOnInit() {
  }

  submit(myForm: NgForm) {
    console.log(myForm);
    this.user.name = myForm.value.name;
    this.user.email = myForm.value.email;
    this.user.phone = myForm.value.phone;
  }

  onSubmit(form: NgForm) {
    this.logService.write('onSubmit');
  }

}
