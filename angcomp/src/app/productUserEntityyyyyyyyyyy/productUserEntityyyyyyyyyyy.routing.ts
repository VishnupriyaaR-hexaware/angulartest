import { Routes } from "@angular/router";

import { AddProductUserEntityyyyyyyyyyyComponent } from "./add-productUserEntityyyyyyyyyyy/add-productUserEntityyyyyyyyyyy.component";
import { EditProductUserEntityyyyyyyyyyyComponent } from "./edit-productUserEntityyyyyyyyyyy/edit-productUserEntityyyyyyyyyyy.component";
import { ListProductUserEntityyyyyyyyyyyComponent } from "./list-productUserEntityyyyyyyyyyy/list-productUserEntityyyyyyyyyyy.component";

export const ProductUserEntityyyyyyyyyyyRoutes: Routes = [
  {
    path: "add-productUserEntityyyyyyyyyyy",
    component: AddProductUserEntityyyyyyyyyyyComponent,
  },
  {
    path: "edit-productUserEntityyyyyyyyyyy/:id",
    component: EditProductUserEntityyyyyyyyyyyComponent,
  },
  {
    path: "list-productUserEntityyyyyyyyyyy",
    component: ListProductUserEntityyyyyyyyyyyComponent,
  },
];
