import { Routes } from "@angular/router";

import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { EditCustomerComponent } from "./edit-customer/edit-customer.component";
import { ListCustomerComponent } from "./list-customer/list-customer.component";

export const CustomerRoutes: Routes = [
  { path: "add-customer", component: AddCustomerComponent },
  { path: "edit-customer/:id", component: EditCustomerComponent },
  { path: "list-customer", component: ListCustomerComponent },
];
