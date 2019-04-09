import { Component, OnInit, Input } from '@angular/core';
import { CurrancyService } from '../services/currancy.service';

@Component({
  selector: 'app-currancy',
  templateUrl: './currancy.component.html',
  styleUrls: ['./currancy.component.scss']
})
export class CurrancyComponent implements OnInit {

  constructor(public currancyService: CurrancyService) { }

  @Input() currancy: any;
  public selected: {};
  ngOnInit() {
      this.currancyService.change.subscribe(
      currancy => (this.selected = this.currancyService.selected)
    );
  }

}
