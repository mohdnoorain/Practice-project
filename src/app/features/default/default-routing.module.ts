import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShootComponent } from './shoot/shoot.component';

const routes: Routes = [{  path:"",component:ShootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
