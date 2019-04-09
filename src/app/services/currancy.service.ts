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

  public getCatalog() {
    return this.http.get(this.baseUrl + '/videos');
  }

  public getPage(page, limit) {
    return this.http.get(this.baseUrl + `/videos?page=${page}&limit=${limit}`);
  }
  public setElementsPerPage(limit) {
    return this.http.get(this.baseUrl + `/videos?limit=${limit}`);
  }
  
}
