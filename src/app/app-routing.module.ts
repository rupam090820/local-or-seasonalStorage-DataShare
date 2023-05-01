import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';

import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { ApiComponent } from './api/api.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"show",component:ShowComponent},
  {path:"home",component:HomeComponent},
  {path:'api',component:ApiComponent},
  

  // {path:'',redirectTo:'HomeComponent',pathMatch:'full'},
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
