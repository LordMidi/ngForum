import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var regExp = new RegExp(args, 'g');
    return value.replace(regExp, "<mark>" + args + "</mark>");
  }

}
