import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-item-stat',
  templateUrl: './item.stat.component.html',
  styleUrls: ['./item.stat.component.css'],
})
export class ItemStatComponent implements OnInit {
  id;
  constructor(private activeRoute: ActivatedRoute){
    activeRoute.params.subscribe(params=> this.id = params["id"]);
  }
  ngOnInit(){}
}
