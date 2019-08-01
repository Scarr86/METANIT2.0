import { Injectable, Optional } from "@angular/core";
import { LogService } from '../../log.service';
import { Chapter4Module } from '../chapter4.module';
//@Optional() проверяет установлен ли providers
// @Injectable({providedIn: Chapter4Module })//если нужно один сервис на всех
@Injectable()
export class DataService {

    private data: string[] = ["Apple iPhone XR", "Samsung Galaxy S9", "Nokia 9"];
    constructor(/*!!!*/@Optional()/*!!!*/ private log: LogService) { }

    getData(): string[] {
        if (this.log)
            this.log.write('операция получения данных в childL8.component');
        return this.data;
    }
    addData(name: string) {
        if (this.log)
            this.log.write('операция добавления данных в childL8.component');
        this.data.push(name);
    }
}