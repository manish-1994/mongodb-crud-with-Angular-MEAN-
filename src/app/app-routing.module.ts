import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeesListComponent} from './Employees/employees-list/employees-list.component';
import {EmployeesReegisterComponent} from './Employees/employees-reegister/employees-reegister.component';

const routes: Routes = [
  {path: 'emplist', component: EmployeesListComponent},
  {path: 'empregister', component: EmployeesReegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
