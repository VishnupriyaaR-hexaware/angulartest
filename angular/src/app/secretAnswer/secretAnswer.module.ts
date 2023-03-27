import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddSecretAnswerComponent } from "./add-secretAnswer/add-secretAnswer.component";
import { EditSecretAnswerComponent } from "./edit-secretAnswer/edit-secretAnswer.component";
import { ListSecretAnswerComponent } from "./list-secretAnswer/list-secretAnswer.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SecretAnswerRoutes } from "./secretAnswer.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SecretAnswerRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddSecretAnswerComponent,
    EditSecretAnswerComponent,
    ListSecretAnswerComponent,
  ],
})
export class SecretAnswerModule {}
