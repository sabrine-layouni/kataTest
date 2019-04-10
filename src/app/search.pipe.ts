import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args) {
      return value;
    }
    else {
      args=args.toUpperCase();
    }

    return value.filter(items=> {
      return items.id.startsWith(args)==true
      })
  }
}
