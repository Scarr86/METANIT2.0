import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { Chapter1Component } from "./chapter-1/chapter1.component";
import { Chapter2Component } from "./chapter2/chapter2.component";
import { Chapter3Component } from "./chapter3/chapter3.component";
import { Chapter4Component } from "./chapter4/chapter4.component";
import { Chapter5Component } from "./ch5-Forms/chapter5.component";
import { Chapter6Component } from "./chapter6/chapter6.component";
import {
  Chapter7Component,
  Item
} from "./chapter7-navigation/chapter7.component";
import { ExampleUsersComp } from "./ExampleModule/ExampleUsers/example-users.comp";
import { ItemComponent } from "./chapter7-navigation/lesson-1/item.component";
import { ItemStatComponent } from "./chapter7-navigation/lesson-2/ItemStat/item.stat.component";
import { ItemDetailsComponent } from "./chapter7-navigation/lesson-2/ItemDetails/item.details.component";
import { AboutComponent } from "./chapter7-navigation/lessom-3-guards/about.component";
import { AboutGuard } from "./chapter7-navigation/lessom-3-guards/about.guard";
import { ExitAboutGuard } from "./chapter7-navigation/lessom-3-guards/exit.about.guard";
import { PipesComponent } from "./chapter8-pipes/pipes.comp";
import { ProductListComp } from "./ExampleModule/ProductList/product-list.comp";

import { Parent1Component } from "./chapter2/lesson-1/parent-1.component";
import { Parent2Component } from "./chapter2/lesson-2/parent-2.component";
import { Parent3Component } from "./chapter2/lesson-3/parent-3.component";
import { Parent4Component } from "./chapter2/lesson-4/parent-4.component";
import { GeoComponent } from "./chapter2/lesson-5/geo.component";
import { HomePageComponent } from "./ExampleModule/ExampleUsers/home-page/home-page.component";
import { SetupPageComponent } from "./ExampleModule/ExampleUsers/setup-page/setup-page.component";
import { ItemGuardChild } from './chapter7-navigation/lesson-1/item.guard-child';
// определение дочерних маршрутов для урока
const itemRoutes = [
  { path: "stat", component: ItemStatComponent },
  { path: "details", component: ItemDetailsComponent }
];
// определение дочерних маршрутов для моей навигации по всем урокам метанит
const childRoutes = [
  { path: "item/:id", component: ItemComponent, children: itemRoutes }
];

const ch2Lesson: Routes = [
  { path: "lesson1", component: Parent1Component },
  { path: "lesson2", component: Parent2Component },
  { path: "lesson3", component: Parent3Component },
  { path: "lesson4", component: Parent4Component },
  { path: "lesson5", component: GeoComponent }
];

const exampleRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "setup", component: SetupPageComponent }
];

// const ch7Lesson:Routes=[
//   {path: "item/:id", component:ItemComponent},
// ]


// const ch7Lesson:Routes=[
//   {path: "item/:id", component:ItemComponent},
// ]


const appRouter: Routes = [
  { path: "", component: Chapter1Component },
  { path: "chapter2", component: Chapter2Component, children: ch2Lesson },
  // { path: "chapter2/:id", component: Chapter2Component },
  { path: "chapter3", component: Chapter3Component },
  { path: "chapter4", component: Chapter4Component },
  { path: "chapter5", component: Chapter5Component },
  { path: "chapter6", component: Chapter6Component },

  //Если разкоментить компонет будет рядом появлятся
  { path: "chapter7", component: Chapter7Component /* children: ch7Lesson */ },
  //пример маршрутизации child так не нужно делать
  // используем дочернию маршрутизацию
  // {path:"chapter7/item/:id/stat", component: ItemStatComponent },
  // {path:"chapter7/item/:id/details", component: ItemDetailsComponent },
  //нужно так. для дочерней маршрутизации
  //Если разкоментить компонет будет рядом появлятся
  {
    path: "chapter7",
    component: Chapter7Component,
    children: childRoutes,
    canActivateChild: [ItemGuardChild]
  },
  // { path: "chapter7/item/:id", component: ItemComponent, children: itemRoutes },

  //Guard
  {
    path: "chapter7/about",
    component: AboutComponent,
    canActivate: [AboutGuard],
    canDeactivate: [ExitAboutGuard]
  },

  { path: "pipes", component: PipesComponent },

  {
    path: "exampleUsers",
    component: ExampleUsersComp,
    children: exampleRoutes
  },
  { path: "exampleProductList", component: ProductListComp },
  { path: "example", redirectTo: "myexample", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRouter)],
  providers: [AboutGuard, ExitAboutGuard, ItemGuardChild],
  exports: [RouterModule]
})
export class MetanitRoutingModule {}
