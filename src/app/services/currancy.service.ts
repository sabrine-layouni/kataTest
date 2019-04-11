import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrancyService {

  public selected = {};
  public page: number = 1;
  public perPage: number = 10;
  public baseUrl = 'https://api.dailymotion.com';
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  public select(currancy) {
    this.selected = currancy;
    this.change.emit(this.selected);
  }

  public getCatalog(page, perPage, filter, search) {
    this.page = page;
    this.perPage = perPage;
    let url = `/channel/music/videos?page=${page}&limit=${perPage}`;

    if (filter && search) {
      url = `/video/${search}?fields=id,title,owner,owner.screenname,owner.url`;
    }
    return this.http.get(this.baseUrl + url);
  }

  public getPage(page, limit) {
    this.page = page;
    this.perPage = limit;
    return this.http.get(this.baseUrl + `/channel/music/videos?page=${page}&limit=${limit}`);
  }
  public setElementsPerPage(limit) {
    this.perPage = limit;
    return this.http.get(this.baseUrl + `/channel/music/videos?limit=${limit}`);
  }
  
}
