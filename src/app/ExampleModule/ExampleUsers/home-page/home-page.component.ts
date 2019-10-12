import { Component, OnInit } from '@angular/core';
import { User, ExampleUsersService } from '../example-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  users: User[] = [];
  searchStr = "";

  constructor(private userService: ExampleUsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {

    // if (num === undefined) num = 0;

    this.userService.getUsers().subscribe(
      data => this.users = data,
      er => alert(er.status),
      () => console.log("Completed")
    );
  }
}
