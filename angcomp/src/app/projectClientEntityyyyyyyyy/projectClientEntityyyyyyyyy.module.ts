import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddProjectClientEntityyyyyyyyyComponent } from "./add-projectClientEntityyyyyyyyy/add-projectClientEntityyyyyyyyy.component";
import { EditProjectClientEntityyyyyyyyyComponent } from "./edit-projectClientEntityyyyyyyyy/edit-projectClientEntityyyyyyyyy.component";
import { ListProjectClientEntityyyyyyyyyComponent } from "./list-projectClientEntityyyyyyyyy/list-projectClientEntityyyyyyyyy.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProjectClientEntityyyyyyyyyRoutes } from "./projectClientEntityyyyyyyyy.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectClientEntityyyyyyyyyRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddProjectClientEntityyyyyyyyyComponent,
    EditProjectClientEntityyyyyyyyyComponent,
    ListProjectClientEntityyyyyyyyyComponent,
  ],
})
export class ProjectClientEntityyyyyyyyyModule {}
