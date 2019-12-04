import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


export class ItemGuardChild implements CanActivateChild {
    constructor(route:ActivatedRoute){
        // console.log("route", route);
    }
    canActivateChild(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        // console.log("routeSnapshot", routeSnapshot);
        // console.log("state", state);

        return new Observable<boolean>(obs => {
            let res = confirm(`Вы уверены, что хотите перети? ${routeSnapshot.url.join('')}`);
            setTimeout(() => obs.next(res), 1000);
        })
    }
}