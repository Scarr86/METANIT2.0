
import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';
import { NgModel } from '@angular/forms';

export class Phone {
  constructor(public title: string,
    public price: Number,
    public company: string) { }
}






@Component({
  selector: 'app-parent-1',
  templateUrl: './parent-1.component.html',
  styleUrls: ['./parent-1.component.css']
})
export class Parent1Component implements OnInit {

  phone: Phone = new Phone('Title', 5, "Huawei");
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

  constructor(private logService: LogService) {

  }

  // addPhone(title:string, price:number, company:string){
  //     this.phones.push(new Phone(title,price,company));
  // }
  addPhone() {
    this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
  }
  addPhone2(title: NgModel, price: NgModel, company: NgModel) {
    this.addPhone();
    console.log('title ' + title.viewModel);
    console.log('price ' + price.viewModel);
    console.log('company ' + company.viewModel);
  }
  onTitleChange() {
    if (this.phone.title == 'no')
      this.phone.title = 'my_undefined'
  }
  onPriceChange() {
    if (this.phone.price > 100)
      this.phone.price = new Number(100);
    //Создаем новый объект типа Number что бы Angular выполнил обновление данных
  }

  ngOnInit() {
  }

}
