import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from './exit.about.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, ComponentCanDeactivate {

  saved: boolean = false;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.saved = true;
  }

  goBack() {

    this.router.navigate(['/chapter7']);

  }

  notExit(): boolean | Observable<boolean> {

    if (!this.saved) {
      // return confirm("Вы хотите покинуть страницу?");
      return new Observable(obs=>{
      let res =  confirm("Вы хотите покинуть страницу?");
        setTimeout(()=>obs.next(res), 1000);
      });
    }
    else {
      return true;
    }
  }
}
