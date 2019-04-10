import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() searchInput: string;
  @Input() filterInput: string;
  @Input() disable: string;
  @Output() onChangeSearch = new EventEmitter<any>(); 
  @Output() onChangeFilter = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    this.onChangeSearch.emit(this.searchInput);  
  }

  onFilter() {
    this.onChangeFilter.emit(this.filterInput);  
  }


}
