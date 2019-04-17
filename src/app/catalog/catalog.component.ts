import { Component, OnInit } from '@angular/core';
import { CurrancyService } from '../services/currancy.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

 public object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
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
    this.currancyService.getPage(this.elementsPerPage, this.page, this.searchInput).subscribe(
      (result: any) => {
        if(result.list) {
          this.data = result.list;
          this.page = result.page;
          this.elementsPerPage = result.limit;
          this.total = result.total;
          this.pages = this.data.length - 1;
        } else if (result.id) {
          this.resetSearch();
          this.data = [];
          this.data.push(result);
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

  setFilter(filter){
    this.error = "";
    this.filterInput = filter;
    // this.getCatalog();
  }

  setSearch(search){
    this.error = "";
    this.searchInput = search;
    this.getCatalog();
  }

  resetSearch(){
    this.filterInput = "";
    this.searchInput = "";
  }
  ngOnInit() {
    this.getCatalog();
  }
}