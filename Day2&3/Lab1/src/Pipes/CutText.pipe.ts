import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
