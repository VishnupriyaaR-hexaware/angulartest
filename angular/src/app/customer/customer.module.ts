import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { EditCustomerComponent } from "./edit-customer/edit-customer.component";
import { ListCustomerComponent } from "./list-customer/list-customer.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomerRoutes } from "./customer.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
  ],
})
export class CustomerModule {}
