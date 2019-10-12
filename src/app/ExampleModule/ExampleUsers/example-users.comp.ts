import { Component } from '@angular/core';
import { ExampleUsersService, User } from './example-user.service';

@Component({
    selector: 'example-users',
    templateUrl: './example-users.comp.html',
    styleUrls:['./example-users.comp.css'],
    providers: [ExampleUsersService]
})
export class ExampleUsersComp {

}