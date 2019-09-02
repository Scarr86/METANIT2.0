
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-parent-4',
  templateUrl: './parent-4.component.html',
  styleUrls: ['./parent-4.component.css']
})
export class Parent4Component implements OnInit {
  constructor(private logService:LogService, private formBuilder: FormBuilder) { }


  //Reactive Forms
  myFormGroup: FormGroup ;
    
  ngOnInit(){
      this.myFormGroup = this.formBuilder.group({
          'userName': ['name', [Validators.required, this.userNameValidator]],
          'userEmail':['email',[Validators.required,Validators.email]],
          'userPhone': ['123', [Validators.pattern("[0-9]{11}")]],
          'userPhones': this.formBuilder.array([ ['+7',[Validators.required, Validators.pattern("[0-9]{11}")] ]  ])
      });


      // this.myFormGroup = new FormGroup({
      //     'userName': new FormControl('name', [Validators.required, this.userNameValidator]),
      //     'userEmail': new FormControl('email',[Validators.required,Validators.email]),
      //     'userPhone': new FormControl('123', Validators.pattern("[0-9]{11}")),
      //     'userPhones': new FormArray([new FormControl('+7', Validators.required)])
      // });
  }

  ReactiveFormSubmit(){
      this.logService.write('ReactiveFormSubmit()');
      console.log(this.myFormGroup);
  }
  userNameValidator(control: FormControl):{[s:string]:boolean}{
      if(control.value === 'no'){
          return {'userName':true};
      }
      return null;
  }
  addUserPhone(){
      this.logService.write('addUserPhone()');
      (<FormArray>this.myFormGroup.controls["userPhones"]).push(new FormControl('+7', [Validators.required, Validators.pattern("[0-9]{11}")]));
  }

}
