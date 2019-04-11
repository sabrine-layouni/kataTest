import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  private _loading: boolean = false;
  loadingStatus: Subject<any> = new Subject();

  get loading():boolean {
    return this._loading;
  }
  
  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  startLoading() {console.log('loading')
    this.loading = true;
  }

  stopLoading() {console.log('stop')
    this.loading = false;
  }
}