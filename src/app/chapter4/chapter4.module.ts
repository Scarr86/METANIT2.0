import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { Chapter4Component } from './chapter4.component';
import { Parent1Component } from '../chapter4/lesson-1/parent-1.component';
import { Child1Component } from './lesson-1/child/child-1.component';






@NgModule({
  imports: [  CommonModule, FormsModule ],
  declarations: [
    Chapter4Component,
    Parent1Component,
    Child1Component,

   ],
  exports: [ Chapter4Component  ],
})
export class Chapter4Module { }
