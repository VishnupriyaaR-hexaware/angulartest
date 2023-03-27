import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddProductUserEntityyyyyyyyyyyComponent } from "./add-productUserEntityyyyyyyyyyy/add-productUserEntityyyyyyyyyyy.component";
import { EditProductUserEntityyyyyyyyyyyComponent } from "./edit-productUserEntityyyyyyyyyyy/edit-productUserEntityyyyyyyyyyy.component";
import { ListProductUserEntityyyyyyyyyyyComponent } from "./list-productUserEntityyyyyyyyyyy/list-productUserEntityyyyyyyyyyy.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductUserEntityyyyyyyyyyyRoutes } from "./productUserEntityyyyyyyyyyy.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductUserEntityyyyyyyyyyyRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddProductUserEntityyyyyyyyyyyComponent,
    EditProductUserEntityyyyyyyyyyyComponent,
    ListProductUserEntityyyyyyyyyyyComponent,
  ],
})
export class ProductUserEntityyyyyyyyyyyModule {}
