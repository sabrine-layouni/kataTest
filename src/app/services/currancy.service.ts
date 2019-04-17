import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Currencies} from '../modals/currencies';

@Injectable({
  providedIn: 'root'
})
export class CurrancyService {

  public selected: object = {};
  public page: number;
  public limit: number = 10;
  public search: string;
  public baseUrl: string = 'https://api.dailymotion.com';
  public fields: string = 'fields=id,title,owner,owner.screenname,owner.url';
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  public select(currancy) {
    this.selected = currancy;
    this.change.emit(this.selected);
  }

  public getPage(limit: number, page?: number, search?: string): Observable<Currencies> {
    page ? this.page = page : 1;
    this.limit = limit;
    let url = `/channel/music/videos?page=${this.page}&limit=${this.limit}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    if (search) {
      this.search = search;
      url = `/video/${this.search}?`, httpOptions;
    }
    return this.http.get<Currencies>(this.baseUrl + url, httpOptions);
  }
}
