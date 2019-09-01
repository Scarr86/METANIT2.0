import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { Chapter1Module } from './chapter-1/chapter1.module';
 

import { Chapter2Module } from './chapter2/chapter2.module';

import  { Chapter3Module } from './chapter3/chapter3.module';

import { Chapter4Module } from './chapter4/chapter4.module';

import { Chapter5Module } from './ch5-Forms/chapter5.module';

import { Chapter6Module } from './chapter6/chapter6.module';
import { Chapter1Component } from './chapter-1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { Chapter5Component } from './ch5-Forms/chapter5.component';
import { Chapter6Component } from './chapter6/chapter6.component';
import { Chapter7Component } from './chapter7/chapter7.component';
import { ExampleUsersComp } from './ExampleModule/ExampleUsers/example-users.comp';
import { ItemComponent } from './chapter7/lesson-1/item.component';
import { ItemStatComponent } from './chapter7/lesson-2/ItemStat/item.stat.component';
import { ItemDetailsComponent } from './chapter7/lesson-2/ItemDetails/item.details.component';
// определение дочерних маршрутов для урока
const itemRoutes = [
  {path: 'stat', component: ItemStatComponent},
  { path: 'details', component: ItemDetailsComponent },
]
// определение дочерних маршрутов для моей навигации по всем урокам метанит
const childRoutes = [
  { path: 'item/:id', component: ItemComponent, children: itemRoutes }
]

const appRouter:Routes=[
  {path:"", component: Chapter1Component },
  {path:"chapter2", component: Chapter2Component },
  {path:"chapter3", component: Chapter3Component },
  {path:"chapter4", component: Chapter4Component },
  {path:"chapter5", component: Chapter5Component },
  {path:"chapter6", component: Chapter6Component },

  {path:"chapter7", component: Chapter7Component, children: childRoutes },
  //пример маршрутизации из рут 
  // {path:"chapter7/item/:id", component: ItemComponent },
  //пример маршрутизации child так не нужно делать 
  // используем дочернию маршрутизацию
  // {path:"chapter7/item/:id/stat", component: ItemStatComponent },
  // {path:"chapter7/item/:id/details", component: ItemDetailsComponent },
  //нужно так. для дочерней маршрутизации
  {path:"chapter7/item/:id", component: ItemComponent, children: itemRoutes },

  {path:"myexample", component: ExampleUsersComp },
  {path:"example",redirectTo: 'myexample', pathMatch: 'full' },
  {path:"**", redirectTo: '' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter),
    // RouterModule.forChild(childRoutes),
    Chapter1Module,
    Chapter2Module,
    Chapter3Module,
    Chapter4Module,
    Chapter5Module,
    Chapter6Module
  ],
  exports: [RouterModule]
})
export class MetanitRoutingModule { }
