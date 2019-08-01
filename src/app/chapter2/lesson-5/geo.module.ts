import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { GeoComponent } from './geo.component';




@NgModule({
  imports: [  CommonModule, FormsModule ],
  declarations: [GeoComponent
   ],
  exports: [GeoComponent ],
})
export class GeoModule { }
