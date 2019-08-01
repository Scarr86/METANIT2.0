import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Item } from '../chapter7.component';




@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  item: Item = new Item();
  // @Input() item = {};

  private subscription: Subscription;
  private querySubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private logService: LogService) {
  }

 
  ngOnInit() {
    //Отслеживание параметров запроса из routerLink
    //или так
    // this.id = activeRoute.snapshot.params["id"];//Не обновляется динамически
    //или так
    // this.subscription = activeRoute.params.subscribe(params=> this.id = params["id"]);
    //или так
    this.activeRoute.paramMap
      .pipe(
        switchMap(params => {
          // console.log(params);
          // console.log(params.get("id"));
          return params.get("id");
        })
      )
      .subscribe(data => this.item.id = +data);
    // Так тоже работает но хз правильно ?
    // map( data => {
    //   console.log(data);
    //   console.log(data['params']['id']);
    //   return data['params']['id'];
    // })

    //Отслеживание дополнительных запросов routerLink
    this.querySubscription = this.activeRoute.queryParams.subscribe(
      (queryParam: any) => {
        this.item.product = queryParam['product'];
        this.item.price = queryParam['price'];
      });
  }

  goBack(){
    this.router.navigate(['/chapter7']);
  }
}
