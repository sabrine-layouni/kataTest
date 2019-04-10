import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { LoadingComponent } from './shared/loading/loading.component';
import { LoadingScreenInterceptor } from './helpers/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CurrancyComponent,
    SearchPipe,
    SearchComponent,
    LoadingComponent
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
  providers: [appRoutingProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
