import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AddProjectClientEntityyyyyyyyyComponent } from "./projectClientEntityyyyyyyyy/add-projectClientEntityyyyyyyyy/add-projectClientEntityyyyyyyyy.component";
import { EditProjectClientEntityyyyyyyyyComponent } from "./projectClientEntityyyyyyyyy/edit-projectClientEntityyyyyyyyy/edit-projectClientEntityyyyyyyyy.component";
import { ListProjectClientEntityyyyyyyyyComponent } from "./projectClientEntityyyyyyyyy/list-projectClientEntityyyyyyyyy/list-projectClientEntityyyyyyyyy.component";
import { AddProductUserEntityyyyyyyyyyyComponent } from "./productUserEntityyyyyyyyyyy/add-productUserEntityyyyyyyyyyy/add-productUserEntityyyyyyyyyyy.component";
import { EditProductUserEntityyyyyyyyyyyComponent } from "./productUserEntityyyyyyyyyyy/edit-productUserEntityyyyyyyyyyy/edit-productUserEntityyyyyyyyyyy.component";
import { ListProductUserEntityyyyyyyyyyyComponent } from "./productUserEntityyyyyyyyyyy/list-productUserEntityyyyyyyyyyy/list-productUserEntityyyyyyyyyyy.component";

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
        { path: 'add-projectClientEntityyyyyyyyy', component: AddProjectClientEntityyyyyyyyyComponent },
        { path: 'edit-projectClientEntityyyyyyyyy/:id', component: EditProjectClientEntityyyyyyyyyComponent },
        { path: 'list-projectClientEntityyyyyyyyy', component: ListProjectClientEntityyyyyyyyyComponent },
        { path: 'add-productUserEntityyyyyyyyyyy', component: AddProductUserEntityyyyyyyyyyyComponent },
        { path: 'edit-productUserEntityyyyyyyyyyy/:id', component: EditProductUserEntityyyyyyyyyyyComponent },
        { path: 'list-productUserEntityyyyyyyyyyy', component: ListProductUserEntityyyyyyyyyyyComponent },
    ]
  }
];
