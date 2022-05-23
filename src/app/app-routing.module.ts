import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultModule } from './features/default/default.module';
import { MainBoardModule } from './features/main-board/main-board.module';


const routes: Routes = [
  { path: "", redirectTo: "default", pathMatch: "full" },
  // {
  //   path: "mainboard",
  //   loadChildren: () => import("./features/main-board/main-board.module").then( m => m.MainBoardModule)
  // },
  // {
    //   path: "default",
    //   loadChildren: () => import("./features/default/default.module").then((m) => m.DefaultModule)
    // },
  
  {
    path: "mainboard",
    loadChildren: () => MainBoardModule
  },
  {
    path: "default",
    loadChildren: () => DefaultModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
