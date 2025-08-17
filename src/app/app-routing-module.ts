import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Employeecomponent } from './employeecomponent/employeecomponent';

const routes: Routes = [
  {path:'',component:Employeecomponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
