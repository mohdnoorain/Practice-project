import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBoardModule } from './features/main-board/main-board.module';


const routes: Routes = [
  { path: "", redirectTo: "mainboard", pathMatch: "full" },
  {
    path: "mainboard",
    loadChildren: () => MainBoardModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
