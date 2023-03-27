import { Routes } from "@angular/router";

import { AddSecretAnswerComponent } from "./add-secretAnswer/add-secretAnswer.component";
import { EditSecretAnswerComponent } from "./edit-secretAnswer/edit-secretAnswer.component";
import { ListSecretAnswerComponent } from "./list-secretAnswer/list-secretAnswer.component";

export const SecretAnswerRoutes: Routes = [
  { path: "add-secretAnswer", component: AddSecretAnswerComponent },
  { path: "edit-secretAnswer/:id", component: EditSecretAnswerComponent },
  { path: "list-secretAnswer", component: ListSecretAnswerComponent },
];
