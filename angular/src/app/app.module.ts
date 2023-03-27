
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AddAgencyValidateRequestComponent } from "./agencyValidateRequest/add-agencyValidateRequest/add-agencyValidateRequest.component";
import { EditAgencyValidateRequestComponent } from "./agencyValidateRequest/edit-agencyValidateRequest/edit-agencyValidateRequest.component";
import { ListAgencyValidateRequestComponent } from "./agencyValidateRequest/list-agencyValidateRequest/list-agencyValidateRequest.component";
import { AddSecretAnswerComponent } from "./secretAnswer/add-secretAnswer/add-secretAnswer.component";
import { EditSecretAnswerComponent } from "./secretAnswer/edit-secretAnswer/edit-secretAnswer.component";
import { ListSecretAnswerComponent } from "./secretAnswer/list-secretAnswer/list-secretAnswer.component";
import { AddCustomerComponent } from "./customer/add-customer/add-customer.component";
import { EditCustomerComponent } from "./customer/edit-customer/edit-customer.component";
import { ListCustomerComponent } from "./customer/list-customer/list-customer.component";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
        AddAgencyValidateRequestComponent,
        EditAgencyValidateRequestComponent,
        ListAgencyValidateRequestComponent,
        AddSecretAnswerComponent,
        EditSecretAnswerComponent,
        ListSecretAnswerComponent,
        AddCustomerComponent,
        EditCustomerComponent,
        ListCustomerComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
   provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
