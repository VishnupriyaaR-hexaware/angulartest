import { Routes } from "@angular/router";

import { AddAgencyRegisterRequestComponent } from "./add-agencyRegisterRequest/add-agencyRegisterRequest.component";
import { EditAgencyRegisterRequestComponent } from "./edit-agencyRegisterRequest/edit-agencyRegisterRequest.component";
import { ListAgencyRegisterRequestComponent } from "./list-agencyRegisterRequest/list-agencyRegisterRequest.component";

export const AgencyRegisterRequestRoutes: Routes = [
  {
    path: "add-agencyRegisterRequest",
    component: AddAgencyRegisterRequestComponent,
  },
  {
    path: "edit-agencyRegisterRequest/:id",
    component: EditAgencyRegisterRequestComponent,
  },
  {
    path: "list-agencyRegisterRequest",
    component: ListAgencyRegisterRequestComponent,
  },
];
