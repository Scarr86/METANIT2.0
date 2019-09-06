import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


export class AboutGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {


        // return confirm("Вы уверены, что хотите перети?");
        return new Observable<boolean>(obs => {
         let res =   confirm("Вы уверены, что хотите перети?"); 

         setTimeout(()=>obs.next(res), 1000);

        })
        // получаем id
        //console.log(route.params['id']);

        // остальной код

    }
}