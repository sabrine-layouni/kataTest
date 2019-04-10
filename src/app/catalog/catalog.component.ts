import { Component, OnInit } from '@angular/core';
import { CurrancyService } from '../services/currancy.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';


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
  public loading: boolean;

  constructor(public currancyService: CurrancyService) { }

  getCatalog() {
    this.currancyService.getCatalog(this.page, this.elementsPerPage,null, null).subscribe(
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

  changeElementsNumber() {
    this.currancyService.setElementsPerPage(this.elementsPerPage).subscribe(
      (result: any) => {
        if(result.list) {
          this.data = result.list;
          this.page = result.page;
          this.elementsPerPage = result.limit;
        }
        else if(result.msg_error) {
          this.error = result.msg_error;
        }
      },
      (err: any) => {
        this.error = err;
      }
    );
  }

  paginate(event) {
    if (this.filterInput && this.searchInput) {
      this.search();
    }
    else {
      this.currancyService.getPage(this.page, this.elementsPerPage).subscribe(
        (result: any) => {
          if(result.list) {
            this.data = result.list;
            this.page = result.page;
            this.elementsPerPage = result.limit;
          }
          else if(result.msg_error) {
            this.error = result.msg_error;
          }
        },
        (err: any) => {
         // this.error = err;
        }
      );
    }
  }

  search(){
    if (this.filterInput && this.searchInput) {
      this.loading = true;
      const result= this.currancyService.getCatalog(this.page, this.elementsPerPage, this.filterInput, this.searchInput);
      result.subscribe((res: any) => {
        if(res.list) {
          this.data = res.list;
          this.page = res.page;
          this.elementsPerPage = res.limit;
          this.total = res.total;
          this.pages = this.data.length - 1;
          this.loading = false;
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

  ngOnInit() {
    this.getCatalog();
  }
}