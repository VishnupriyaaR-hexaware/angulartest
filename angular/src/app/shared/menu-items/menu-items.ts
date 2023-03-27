import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'home', name: 'Entities', type: 'link', icon: 'web' },
    { state: 'list-agencyValidateRequest', name: 'AgencyValidateRequest', type: 'link', icon: 'view_list' },
    { state: 'list-agencyRegisterRequest', name: 'AgencyRegisterRequest', type: 'link', icon: 'view_list' },
    { state: 'list-customer', name: 'Customer', type: 'link', icon: 'view_list' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
