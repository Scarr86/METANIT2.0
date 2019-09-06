import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chapter1Component } from './chapter-1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { Chapter5Component } from './ch5-Forms/chapter5.component';
import { Chapter6Component } from './chapter6/chapter6.component';
import { Chapter7Component } from './chapter7-navigation/chapter7.component';
import { ExampleUsersComp } from './ExampleModule/ExampleUsers/example-users.comp';
import { ItemComponent } from './chapter7-navigation/lesson-1/item.component';
import { ItemStatComponent } from './chapter7-navigation/lesson-2/ItemStat/item.stat.component';
import { ItemDetailsComponent } from './chapter7-navigation/lesson-2/ItemDetails/item.details.component';
import { AboutComponent } from './chapter7-navigation/lessom-3-guards/about.component';
import { AboutGuard } from './chapter7-navigation/lessom-3-guards/about.guard';
import { ExitAboutGuard } from './chapter7-navigation/lessom-3-guards/exit.about.guard';
import { PipesComponent } from './chapter8-pipes/pipes.comp';
import { ProductListComp } from './ExampleModule/ProductList/product-list.comp';
// определение дочерних маршрутов для урока
const itemRoutes = [
  { path: 'stat', component: ItemStatComponent },
  { path: 'details', component: ItemDetailsComponent },
]
// определение дочерних маршрутов для моей навигации по всем урокам метанит
const childRoutes = [
  { path: 'item/:id', component: ItemComponent, children: itemRoutes }
]

const appRouter: Routes = [
  { path: "", component: Chapter1Component },
  { path: "chapter2", component: Chapter2Component },
  { path: "chapter3", component: Chapter3Component },
  { path: "chapter4", component: Chapter4Component },
  { path: "chapter5", component: Chapter5Component },
  { path: "chapter6", component: Chapter6Component },

  { path: "chapter7", component: Chapter7Component },
  //Если разкоментить компонет будет рядом появлятся
  //  {path:"chapter7", component: Chapter7Component, children: childRoutes },
  //пример маршрутизации из рут 
  // {path:"chapter7/item/:id", component: ItemComponent },
  //пример маршрутизации child так не нужно делать 
  // используем дочернию маршрутизацию
  // {path:"chapter7/item/:id/stat", component: ItemStatComponent },
  // {path:"chapter7/item/:id/details", component: ItemDetailsComponent },
  //нужно так. для дочерней маршрутизации
  { path: "chapter7/item/:id", component: ItemComponent, children: itemRoutes },
  
  //Guard
  {
    path: "chapter7/about",
    component: AboutComponent,
    canActivate: [AboutGuard],
    canDeactivate: [ExitAboutGuard]
  },
  
  { path: 'pipes', component: PipesComponent},

  // { path: "myexample", component: ExampleUsersComp },
  { path: "myexample", component: ProductListComp },
  { path: "example", redirectTo: 'myexample', pathMatch: 'full' },
  { path: "**", redirectTo: '' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouter),
  ],
  providers: [AboutGuard, ExitAboutGuard],
  exports: [RouterModule]
})
export class MetanitRoutingModule { }
