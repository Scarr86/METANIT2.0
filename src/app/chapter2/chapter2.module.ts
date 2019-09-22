import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { Chapter2Component } from './chapter2.component';

import { Parent1Component } from './lesson-1/parent-1.component';
import { Child1Component } from './lesson-1/child/child-1.component';

import { Parent2Component } from './lesson-2/parent-2.component';
import { Child2Component } from './lesson-2/child/child-2.component';

import { Parent3Component } from './lesson-3/parent-3.component';
import { Child3Component } from './lesson-3/child/child-3.component';

import { Parent4Component } from './lesson-4/parent-4.component';
import { Child4Component } from './lesson-4/child/child-4.component';


import { GeoModule } from './lesson-5/geo.module';
import { MetanitRoutingModule } from '../metanit-routing.module';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  imports: [  CommonModule, 
    FormsModule, 
    GeoModule,
    MetanitRoutingModule,
   ],
  declarations: [
    Chapter2Component,
    Parent1Component,
    Child1Component,

    Parent2Component,
    Child2Component,

    Parent3Component,
    Child3Component,

    Parent4Component,
    Child4Component,



   ],
  exports: [Chapter2Component  ],
})
export class Chapter2Module { }
