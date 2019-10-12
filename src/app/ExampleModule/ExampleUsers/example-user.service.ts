import { Injectable } from "@angular/core";

import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IUser {
    name: string;
    picture: string;
    location: string;
}

export class User implements IUser {
    name: string;
    picture: string;
    location: string;
}
// @Injectable({ providedIn: ExampleModule })
@Injectable()
export class ExampleUsersService {
    // https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb
    usersUrl: string = 'https://randomuser.me/api/';

    private _size = 8;
    set size(size: number) {
        this._size = size;
    }
    get size() {
       return  this._size;
    }

    constructor(private http: HttpClient) {
        console.log("load service");
     }

    users: User[] = [];


    getUsers(): Observable<User[]> {
        const params = {
            inc: "gender,name,picture,location",
            results: this._size.toString(),
            nat: "gb"
        }

        return this.http.get(this.usersUrl, { params })
            .pipe(map((response: any) => {
                let results = response["results"];
                return results.map((u: any): IUser => {
                    return {
                        name: u.name.title + ' ' + u.name.first + ' ' + u.name.last,
                        picture: u.picture.large,
                        location: u.location.city + " " + u.location.state + " " + u.location.street.name + " " + u.location.street.number
                    }
                })
            }));
    }

}