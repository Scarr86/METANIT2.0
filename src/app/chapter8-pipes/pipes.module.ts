import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes.comp';
import { FactorialPipe } from './factorial.pipe';
import { JoinPipe } from './join.pipe';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  imports: [  CommonModule, FormsModule, HttpClientModule ],
  declarations: [
    PipesComponent,
    FactorialPipe, JoinPipe
   ],
   exports: [PipesComponent]
})
export class PipesModule { }
