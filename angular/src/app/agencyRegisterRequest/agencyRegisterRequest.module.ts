import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddAgencyRegisterRequestComponent } from "./add-agencyRegisterRequest/add-agencyRegisterRequest.component";
import { EditAgencyRegisterRequestComponent } from "./edit-agencyRegisterRequest/edit-agencyRegisterRequest.component";
import { ListAgencyRegisterRequestComponent } from "./list-agencyRegisterRequest/list-agencyRegisterRequest.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgencyRegisterRequestRoutes } from "./agencyRegisterRequest.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AgencyRegisterRequestRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddAgencyRegisterRequestComponent,
    EditAgencyRegisterRequestComponent,
    ListAgencyRegisterRequestComponent,
  ],
})
export class AgencyRegisterRequestModule {}
