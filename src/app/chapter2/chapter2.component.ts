import { Component, OnInit, OnDestroy } from '@angular/core';
import { LogService } from '../log.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subscriber } from 'rxjs';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.css']
})
export class Chapter2Component implements OnInit, OnDestroy {
  subscription:Subscription;
  constructor(private logService:LogService, private activeRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
    
    this.subscription = this.activeRoute.params.subscribe(params=>{
      console.log(params);
      
    });
  }

  ngOnDestroy(){
    console.log("destroy chapter2");
    this.subscription.unsubscribe
    
  }
  

}
