import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routes';
import { MatPaginatorModule} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CurrancyComponent } from './currancy/currancy.component';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CurrancyComponent,
    SearchPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbPaginationModule,
    FormsModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
