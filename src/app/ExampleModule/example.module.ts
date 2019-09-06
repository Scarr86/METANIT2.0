import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ExampleUsersComp } from './ExampleUsers/example-users.comp';
import { ExampleCardUserComp } from './ExampleUsers/ExampleCardUser/example-card-user.comp'
import { HoverDirective } from './ExampleUsers/ExampleCardUser/example-hover.directive';

import { GoogleDriveComp } from './GoogleDrive/google-drive.comp';
import { ProductListComp } from './ProductList/product-list.comp';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, CommonModule],
    declarations: [
        ExampleUsersComp, 
        ExampleCardUserComp, 
        HoverDirective, 

        GoogleDriveComp,

        ProductListComp,
    ],
    exports: [
        ExampleUsersComp,
        
        ProductListComp,
    ],       // экспортируем компонент
})
export class ExampleModule { }
