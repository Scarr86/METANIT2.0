 //************ Первая программа покупателя*/

import { Component, OnInit } from '@angular/core';
import { GeoService, IGeo } from './geo.service';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css'],
  providers: [GeoService],
})
export class GeoComponent implements OnInit {

  messege: string = 'Data Component';

  geo: IGeo | string;

  constructor(private geoService: GeoService, private logService: LogService) { 

  }
  
  ngOnInit() { }

  getSource() {
      // this.geoService.source();
      const subscription = this.geoService.source.subscribe(
          // (val: any) => console.log('next:', val),
          (val: any) => { 
              console.log(val); 
              this.geo = val 
            },
          (err: any) => { 
              alert(err); 
            },
          () => {
              console.log('completed'); 
              subscription.unsubscribe()
            }
      );
      // не забываем отписаваться
      //setTimeout(() => subscription.unsubscribe(), 4500);
  }

  getCurrentPosition() {
      //Асинхронно вызов?
      this.geo = this.geoService.getCurrentPosition();
      console.log(this.geo);
      if (typeof this.geo === 'string')
          alert(this.geo);
  }

  clearGeo() {
      (this.geo as IGeo).Accuracy = null;
      (this.geo as IGeo).Latitude = null;
      (this.geo as IGeo).Longitude = null;

  }

}
