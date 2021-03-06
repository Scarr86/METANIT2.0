import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MetanitRoutingModule } from './metanit-routing.module';

import { Chapter1Module } from './chapter-1/chapter1.module';
 

import { Chapter2Module } from './chapter2/chapter2.module';

import  { Chapter3Module } from './chapter3/chapter3.module';

import { Chapter4Module } from './chapter4/chapter4.module';

import { Chapter5Module } from './ch5-Forms/chapter5.module';

import { Chapter6Module } from './chapter6/chapter6.module';

import { Chapter7Module } from './chapter7-navigation/chapter7.module';

import { PipesModule } from './chapter8-pipes/pipes.module';


import { ExampleModule } from './ExampleModule/example.module';
import { UpmenuDirective } from './upmenu.directive';


@NgModule({
  declarations: [
    AppComponent,
    UpmenuDirective,
  ],
  imports: [
    BrowserModule,
    MetanitRoutingModule,
    // RouterModule.forRoot(appRouter),
    FormsModule,
    ReactiveFormsModule,

    Chapter1Module,

    Chapter2Module,

    Chapter3Module,

    Chapter4Module,

    Chapter5Module,

    Chapter6Module,

    Chapter7Module,

    PipesModule,

    ExampleModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
