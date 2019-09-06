import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { Chapter7Component } from './chapter7.component';

import { ItemComponent } from './lesson-1/item.component';

import { MetanitRoutingModule } from '../metanit-routing.module';
import { ItemDetailsComponent } from './lesson-2/ItemDetails/item.details.component';
import { ItemStatComponent } from './lesson-2/ItemStat/item.stat.component';

import { AboutComponent } from './lessom-3-guards/about.component';







@NgModule({
  imports: [  CommonModule, FormsModule, MetanitRoutingModule ],
  declarations: [
    Chapter7Component,
    ItemComponent,
    ItemDetailsComponent,
    ItemStatComponent,
    AboutComponent

   ],
  exports: [ Chapter7Component  ],
})
export class Chapter7Module { }
