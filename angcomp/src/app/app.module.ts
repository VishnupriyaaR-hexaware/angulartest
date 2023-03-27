
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
import { AddProjectClientEntityyyyyyyyyComponent } from "./projectClientEntityyyyyyyyy/add-projectClientEntityyyyyyyyy/add-projectClientEntityyyyyyyyy.component";
import { EditProjectClientEntityyyyyyyyyComponent } from "./projectClientEntityyyyyyyyy/edit-projectClientEntityyyyyyyyy/edit-projectClientEntityyyyyyyyy.component";
import { ListProjectClientEntityyyyyyyyyComponent } from "./projectClientEntityyyyyyyyy/list-projectClientEntityyyyyyyyy/list-projectClientEntityyyyyyyyy.component";
import { AddProductUserEntityyyyyyyyyyyComponent } from "./productUserEntityyyyyyyyyyy/add-productUserEntityyyyyyyyyyy/add-productUserEntityyyyyyyyyyy.component";
import { EditProductUserEntityyyyyyyyyyyComponent } from "./productUserEntityyyyyyyyyyy/edit-productUserEntityyyyyyyyyyy/edit-productUserEntityyyyyyyyyyy.component";
import { ListProductUserEntityyyyyyyyyyyComponent } from "./productUserEntityyyyyyyyyyy/list-productUserEntityyyyyyyyyyy/list-productUserEntityyyyyyyyyyy.component";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
        AddProjectClientEntityyyyyyyyyComponent,
        EditProjectClientEntityyyyyyyyyComponent,
        ListProjectClientEntityyyyyyyyyComponent,
        AddProductUserEntityyyyyyyyyyyComponent,
        EditProductUserEntityyyyyyyyyyyComponent,
        ListProductUserEntityyyyyyyyyyyComponent
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
