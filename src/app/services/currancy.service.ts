import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrancyService {

  public selected = {};
  public baseUrl = 'https://api.dailymotion.com/channel/music';
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  public select(currancy) {
    this.selected = currancy;
    this.change.emit(this.selected);
  }

  public getCatalog(filter, search) {console.log(filter, search)
    let url = '/videos?';
    if (filter) {
      url = url + `${filter}`;
    }
    if (search) {
      url = url + `${filter}`;
    }
    return this.http.get(this.baseUrl + url);
  }

  public getPage(page, limit) {
    return this.http.get(this.baseUrl + `/videos?page=${page}&limit=${limit}`);
  }
  public setElementsPerPage(limit) {
    return this.http.get(this.baseUrl + `/videos?limit=${limit}`);
  }
  
}
