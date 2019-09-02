import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { ActivatedRoute, Router } from '@angular/router';

export class Item {
  id: number;
  product: string;
  price: number;
}

@Component({
  selector: 'app-chapter7',
  templateUrl: './chapter7.component.html',
  styleUrls: ['./chapter7.component.css']
})
export class Chapter7Component implements OnInit {

  item: Item = new Item();


  constructor(private router: Router, private logService: LogService) {
    logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
  }

  ngOnInit() {
    this.item.id = 1;
    this.item.price = 1000;
    this.item.product = 'phone';
  }

  goToItem(item: Item, option?: string) {
    console.log('chapter7', this.router.url);
    if (typeof item.id !== 'undefined')
      // if (option === undefined)
      //   this.router.navigate(
      //     ["/chapter7", "item", item.id],
      //     {
      //       queryParams: {
      //         'product': item.product,
      //         'price': item.price
      //       }
      //     });
      // else
      console.log(["/chapter7/item", item.id, (option || '')].join(''));
      
        this.router.navigate(
          ["/chapter7/item", item.id, (option || '')],
          {
            queryParams: {
              'product': item.product,
              'price': item.price
            }
          });

  }







}
