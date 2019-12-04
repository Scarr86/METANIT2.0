import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './example-user.service';

@Pipe({
    name: "search"
})
export class SearchPipe implements PipeTransform {
    transform(users: IUser[], value: string) {
        return users.filter(u => u.name.toUpperCase().includes(value.toUpperCase()));
    }
}