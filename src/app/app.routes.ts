import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {ModuleWithProviders} from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';
import { CurrancyComponent } from './currancy/currancy.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


const APP_ROUTES: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: 'currancy/:id',
    component: CurrancyComponent
  }
];
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {useHash: true});
