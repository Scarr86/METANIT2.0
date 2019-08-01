import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Chapter1Component } from './chapter1.component';
import { FirstAppComponent } from './first-app/first-app.component';




@NgModule({
  imports: [  CommonModule, FormsModule ],
  declarations: [
      Chapter1Component,
      FirstAppComponent,
   ],
   exports: [Chapter1Component]
})
export class Chapter1Module { }
