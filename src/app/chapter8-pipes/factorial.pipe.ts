import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "factorial"
})
export class FactorialPipe implements PipeTransform{
    transform(value:number){

        if(value <=0 ) return 0;
        let res = 1;
        for(let i = 1; i <= value; i++){
            res = res * i;
        }
        return res;
    }

}