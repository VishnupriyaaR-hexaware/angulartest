import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AddAgencyValidateRequestComponent } from "./agencyValidateRequest/add-agencyValidateRequest/add-agencyValidateRequest.component";
import { EditAgencyValidateRequestComponent } from "./agencyValidateRequest/edit-agencyValidateRequest/edit-agencyValidateRequest.component";
import { ListAgencyValidateRequestComponent } from "./agencyValidateRequest/list-agencyValidateRequest/list-agencyValidateRequest.component";
import { AddAgencyRegisterRequestComponent } from "./agencyRegisterRequest/add-agencyRegisterRequest/add-agencyRegisterRequest.component";
import { EditAgencyRegisterRequestComponent } from "./agencyRegisterRequest/edit-agencyRegisterRequest/edit-agencyRegisterRequest.component";
import { ListAgencyRegisterRequestComponent } from "./agencyRegisterRequest/list-agencyRegisterRequest/list-agencyRegisterRequest.component";
import { AddCustomerComponent } from "./customer/add-customer/add-customer.component";
import { EditCustomerComponent } from "./customer/edit-customer/edit-customer.component";
import { ListCustomerComponent } from "./customer/list-customer/list-customer.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
        { path: 'add-agencyValidateRequest', component: AddAgencyValidateRequestComponent },
        { path: 'edit-agencyValidateRequest/:id', component: EditAgencyValidateRequestComponent },
        { path: 'list-agencyValidateRequest', component: ListAgencyValidateRequestComponent },
        { path: 'add-agencyRegisterRequest', component: AddAgencyRegisterRequestComponent },
        { path: 'edit-agencyRegisterRequest/:id', component: EditAgencyRegisterRequestComponent },
        { path: 'list-agencyRegisterRequest', component: ListAgencyRegisterRequestComponent },
        { path: 'add-customer', component: AddCustomerComponent },
        { path: 'edit-customer/:id', component: EditCustomerComponent },
        { path: 'list-customer', component: ListCustomerComponent },
    ]
  }
];
