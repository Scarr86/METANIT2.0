import { Component, OnInit } from '@angular/core';
import { ExampleUsersService } from '../example-user.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css'],
})
export class SetupPageComponent implements OnInit {
  size;

  constructor(private userService:ExampleUsersService) { }

  ngOnInit() {
    this.size = this.userService.size;
  }
  onChange(){
    this.userService.size = +this.size;
  }
}
