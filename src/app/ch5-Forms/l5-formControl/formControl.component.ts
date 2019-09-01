
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { Observable, of } from 'rxjs';



class User {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-formControl',
  templateUrl: './formControl.component.html',
  styleUrls: ['./formControl.component.css']
})
export class AppFormControl implements OnInit {
  formControl: FormControl;
  status;
  value;
  constructor() { }

  ngOnInit() {

    this.formControl = new FormControl("5", [Validators.required, Validators.min(5), this.myValidatorMax(55)], /*Асинхронный валидатор*/[this.myAsycValidator]);
    this.formControl.valueChanges.subscribe(val => this.value = val);
    this.formControl.statusChanges.subscribe(stat => {
      this.status = '';
      if (this.formControl.errors)
        Object.keys(this.formControl.errors).map(key => {
          this.status += key + ': ' + JSON.stringify(this.formControl.errors[key], null, 2) + '; ';
        })
    });

  }

  myValidatorMax(val: number) {
    return function (formControl: FormControl) {
      if (formControl.value > val) {
        return { 'formControl': { mesage: "Should be something " } };
      }
      return null;
    }
  }

  myAsycValidator(formControl: FormControl): Observable<null | any> {
    if (Number.isNaN(+formControl.value)) {
      return of({ 'asycFormControl': { mesage: "Asych Should be something " }, prop: " prop" });
    }
    return of(null);
  }

}
