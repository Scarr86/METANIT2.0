import { Injectable } from "@angular/core";
import { GeoModule } from "./geo.module";
import { Observable, throwError } from 'rxjs';

export interface IGeo {
    Latitude: number,
    Longitude: number,
    Accuracy: number
}

class GeoData {

    private _geo: IGeo = {
        Latitude: undefined,
        Longitude: undefined,
        Accuracy: undefined
    };

    options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    ondata: Function;
    onerror: Function;
    oncomplete: Function;

    constructor() { }

    getLocation() {
        navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
    }

    success: PositionCallback = (pos: Position) => {
        let crd = pos.coords;
        this._geo.Latitude = crd.latitude;
        this._geo.Longitude = crd.longitude;
        this._geo.Accuracy = crd.accuracy;
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        this.ondata(this._geo);
        this.oncomplete();
    }

    error: PositionErrorCallback = (err: PositionError) => {
        console.log('error');
        console.warn(`ERROR(${err.code}): ${err.message}`);
        this.onerror("Error");
    }
}



@Injectable()
// @Injectable({providedIn: GeoModule})//? не работает, не знаю почему?
export class GeoService {

    private _geo: IGeo | string = {
        Latitude: undefined,
        Longitude: undefined,
        Accuracy: undefined
    };



    source: Observable<any> = Observable.create((observer: any) => {
        const datasource = new GeoData();
        datasource.ondata = (e) => observer.next(e);
        datasource.onerror = (err) => observer.error(err);
        datasource.oncomplete = () => observer.complete();

        console.log('Observable created');

        setTimeout(() => {
            datasource.getLocation();
        }, 1000);
        return () => {
            console.log('Observable destroyed');
        }
    });

    // source:Observable<number> = new Observable((observer:any) => {
    // source: Observable<any> = Observable.create((observer: any) => {
    //     let count = 0;
    //     console.log('Observable created');

    //     const timer = setInterval(() => {
    //         observer.next(count);
    //         count++;
    //     }, 1000);
    //     return () => {
    //         console.log('Observable destroyed');
    //         clearInterval(timer);
    //     }
    // });

/************************************************* */
    options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    success: PositionCallback = (pos: Position) => {
        let crd = pos.coords;
        (<IGeo>this._geo).Latitude = crd.latitude;
        (this._geo as IGeo).Longitude = crd.longitude;
        (this._geo as IGeo).Accuracy = crd.accuracy;
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    error: PositionErrorCallback;

    constructor() {
        this.error = function (err: PositionError) {
            console.log('error');
            console.warn(`ERROR(${err.code}): ${err.message}`);
            this._geo = "Not find position";
        };
    }


    getCurrentPosition(): IGeo | string {

        navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
        return this._geo;
    }

}