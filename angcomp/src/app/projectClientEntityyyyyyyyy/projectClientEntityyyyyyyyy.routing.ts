import { Routes } from "@angular/router";

import { AddProjectClientEntityyyyyyyyyComponent } from "./add-projectClientEntityyyyyyyyy/add-projectClientEntityyyyyyyyy.component";
import { EditProjectClientEntityyyyyyyyyComponent } from "./edit-projectClientEntityyyyyyyyy/edit-projectClientEntityyyyyyyyy.component";
import { ListProjectClientEntityyyyyyyyyComponent } from "./list-projectClientEntityyyyyyyyy/list-projectClientEntityyyyyyyyy.component";

export const ProjectClientEntityyyyyyyyyRoutes: Routes = [
  {
    path: "add-projectClientEntityyyyyyyyy",
    component: AddProjectClientEntityyyyyyyyyComponent,
  },
  {
    path: "edit-projectClientEntityyyyyyyyy/:id",
    component: EditProjectClientEntityyyyyyyyyComponent,
  },
  {
    path: "list-projectClientEntityyyyyyyyy",
    component: ListProjectClientEntityyyyyyyyyComponent,
  },
];
