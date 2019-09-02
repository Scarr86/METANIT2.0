import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class Chapter7Component implements OnInit, OnDestroy {

  item: Item = new Item();


  constructor(private router: Router, private logService: LogService) {
    logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
  }

  ngOnDestroy() {
    console.log("Destroy Chapter7Component");
  }

  ngOnInit() {
    this.item.id = 1;
    this.item.price = 1000;
    this.item.product = 'phone';
  }

  goToItem(item: Item, option?: string) {

    let comands: Array<any> = [];
    comands.push("/chapter7/item");
    comands.push(item.id.toString());
    if (option) comands.push(option);

    this.router.navigate(
      comands,
      {
        queryParams: {
          'product': item.product,
          'price': item.price
        }
      });

  }







}
