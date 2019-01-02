import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shorten'
  // pure: false , performance cost for enabling live filtering
})
export class ShortenPipe implements PipeTransform {
  transform(value: any) {
    if (value.length > 10) {
    return value.substr(0, 10) + ' ...';
    }
    return value;
  }
}
