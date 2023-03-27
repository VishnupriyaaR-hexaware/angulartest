import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddAgencyValidateRequestComponent } from "./add-agencyValidateRequest/add-agencyValidateRequest.component";
import { EditAgencyValidateRequestComponent } from "./edit-agencyValidateRequest/edit-agencyValidateRequest.component";
import { ListAgencyValidateRequestComponent } from "./list-agencyValidateRequest/list-agencyValidateRequest.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgencyValidateRequestRoutes } from "./agencyValidateRequest.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AgencyValidateRequestRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddAgencyValidateRequestComponent,
    EditAgencyValidateRequestComponent,
    ListAgencyValidateRequestComponent,
  ],
})
export class AgencyValidateRequestModule {}
