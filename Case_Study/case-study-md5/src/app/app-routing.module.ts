import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {CreateServiceComponent} from "./service/create-service/create-service.component";


const routes: Routes = [
  {path:'', component:HomeComponent},

  /*Customer*/
  {path:'customer-create', component:CreateCustomerComponent},

  /*Employee*/
  {path:'employee-create', component:CreateEmployeeComponent},

  /*Service*/
  {path:'service-create', component:CreateServiceComponent},
  /*Contract*/
  /*Contract-Detail*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
