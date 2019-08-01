import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { Chapter6Component } from './chapter6.component';

import { Parent1Component } from './lesson-1/parent-1.component';






@NgModule({
  imports: [  CommonModule, FormsModule, HttpClientModule ],
  declarations: [
    Chapter6Component,
    Parent1Component,

   ],
  exports: [ Chapter6Component  ],
})
export class Chapter6Module { }
