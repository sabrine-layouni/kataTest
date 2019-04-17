import { Component, OnInit } from '@angular/core';
import { CurrancyService } from '../services/currancy.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

 
  public data: any = [];
  public error: string = '';
  public elementsPerPage: number = 10;
  public page: number = 1;
  public total: number;
  public pages: number;
  public searchInput: string;
  public filterInput: string;
  public searching: boolean = false;

  constructor(public currancyService: CurrancyService) { }

  getCatalog() {
    this.currancyService.getPage(this.elementsPerPage, this.page).subscribe(
      (result: any) => {
        if(result.list) {
          this.data = result.list;
          this.page = result.page;
          this.elementsPerPage = result.limit;
          this.total = result.total;
          this.pages = this.data.length - 1;
        }
        else if(result.error) {
          this.error = result.error.message;
        }
      },
      (err: any) => {
        this.error = err;
      }
    );
  }

  search(){
    if (this.filterInput!=='' && this.searchInput!='') {
      const result= this.currancyService.getPage(this.elementsPerPage, this.page, this.searchInput);
      result.subscribe((res: any) => {
        if(res.list) {
          this.data = res.list;
          this.page = res.page;
          this.elementsPerPage = res.limit;
          this.total = res.total;
          this.pages = this.data.length - 1;
        } else if (res.id) {
          this.resetSearch();
          this.data = [];
          this.data.push(result);
          this.searching = true;
        }
        else if(res.error) {
          this.error = res.error.msg_error;
        }
      },
      (err: any) => {
        this.error = err.error.error.message;
      });
    }
  }

  setFilter(filter){
    this.error = "";
    this.filterInput = filter;
    this.search();
  }

  setSearch(search){
    this.error = "";
    this.searchInput = search;
    this.search();
  }

  resetSearch(){
    this.filterInput = "";
    this.searchInput = "";
  }
  ngOnInit() {
    this.getCatalog();
  }
}