import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { Chapter3Component } from './chapter3.component';

import { Parent1Component } from './lesson-1/parent-1.component';
import { Parent2Component } from './lesson-2/parent-2.component';
import { BoldDirective } from './lesson-2/bold.directive';

import { Parent3Component } from './lesson-3/parent-3.component';
import { WhileDirective } from './lesson-3/while.directive';




@NgModule({
  imports: [  CommonModule, FormsModule ],
  declarations: [
    Chapter3Component,
    Parent1Component,

    Parent2Component,
    BoldDirective,

    Parent3Component,
    WhileDirective,
   ],
  exports: [ Chapter3Component  ],
})
export class Chapter3Module { }
