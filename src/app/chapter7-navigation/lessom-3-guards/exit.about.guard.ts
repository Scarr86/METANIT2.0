import { Observable, Subscription } from 'rxjs';
import { CanDeactivate } from '@angular/router';

export interface ComponentCanDeactivate {
    notExit: () => boolean | Observable<boolean>;
}

export class ExitAboutGuard implements CanDeactivate<ComponentCanDeactivate>{

    canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {

        // return component.notExit() ;


        
        return component.notExit ? component.notExit() : true; // если функция реализованна то вызываем ее
    }
}