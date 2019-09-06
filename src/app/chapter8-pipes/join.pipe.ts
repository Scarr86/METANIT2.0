import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "join",
    pure: false //Теперь сделаем его impure pipe(следит за любыми изменениями).  Для этого добавим в декоратор Pipe параметр pure: false:
})
export class JoinPipe implements PipeTransform {
    transform(arr: any, start?: number, end?: number) {
        let res: Array<any> = arr;
        if (start !== undefined)
            if (end !== undefined)
                res = res.slice(start, end);
            else
                res = res.slice(start, res.length);
        return res.map(r => {
            return '[ ' + r + ' ]';
        }).join(' ');
    }
}