import { Component, OnInit } from '@angular/core';
import { CurrancyService } from '../services/currancy.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

 
  public data: any = [];
  public error: string;
  public elementsPerPage: number;
  public page: number;
  public total: number;
  public pages: number;
  
  constructor(public currancyService: CurrancyService) { }

  getCatalog() {
    this.currancyService.getCatalog().subscribe(
      (result: any) => {
        if(result.list) {
          this.data = result.list;
          this.page = result.page;
          this.elementsPerPage = result.limit;
          this.total = result.total;
          this.pages = this.data.length - 1;
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
        this.error = err;
      }
    );
  }

  ngOnInit() {
    this.getCatalog();
  }
}