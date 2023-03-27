import { Routes } from "@angular/router";

import { AddAgencyValidateRequestComponent } from "./add-agencyValidateRequest/add-agencyValidateRequest.component";
import { EditAgencyValidateRequestComponent } from "./edit-agencyValidateRequest/edit-agencyValidateRequest.component";
import { ListAgencyValidateRequestComponent } from "./list-agencyValidateRequest/list-agencyValidateRequest.component";

export const AgencyValidateRequestRoutes: Routes = [
  {
    path: "add-agencyValidateRequest",
    component: AddAgencyValidateRequestComponent,
  },
  {
    path: "edit-agencyValidateRequest/:id",
    component: EditAgencyValidateRequestComponent,
  },
  {
    path: "list-agencyValidateRequest",
    component: ListAgencyValidateRequestComponent,
  },
];
