import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ExampleUsersComp } from './ExampleUsers/example-users.comp';
import { ExampleCardUserComp } from './ExampleUsers/ExampleCardUser/example-card-user.comp'
import { HoverDirective } from './ExampleUsers/ExampleCardUser/example-hover.directive';

import { ProductListComp } from './ProductList/product-list.comp';

import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './ExampleUsers/search.pipe';
import { HomePageComponent } from './ExampleUsers/home-page/home-page.component';
import { SetupPageComponent } from './ExampleUsers/setup-page/setup-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MetanitRoutingModule } from '../metanit-routing.module';

// const routes: Routes = [
//   { path: "exampleUsers", component: ExampleUsersComp },
// ]


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        MetanitRoutingModule,
        // RouterModule.forChild(routes)
    ],
    declarations: [
        ExampleUsersComp,
        ExampleCardUserComp,
        HoverDirective,
        ProductListComp,
        SearchPipe,
        HomePageComponent,
        SetupPageComponent,
    ],
    exports: [
        ExampleUsersComp,

        ProductListComp,
        // RouterModule
    ],       // экспортируем компонент
})
export class ExampleModule { }
