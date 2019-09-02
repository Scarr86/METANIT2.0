import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { Chapter5Component } from './chapter5.component';
import { Parent1Component } from './lesson-1/parent-1.component';
import { Parent2Component } from './lesson-2/parent-2.component';
import { Parent3Component } from './lesson-3/parent-3.component';
import { Parent4Component } from './lesson-4/parent-4.component';
import { AppFormControl } from './l5-formControl/formControl.component';






@NgModule({
  imports: [  CommonModule, FormsModule, ReactiveFormsModule ],
  declarations: [
    Chapter5Component,
    Parent1Component,
    Parent2Component,
    Parent3Component,
    Parent4Component,
    AppFormControl,


   ],
  exports: [ Chapter5Component  ],
})
export class Chapter5Module { }
