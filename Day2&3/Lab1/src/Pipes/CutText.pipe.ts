import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CutText',
  standalone: true
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, limit: number =20): string {
    if(!value) return '';
    if(value.length <= limit) return value;
    return value.substring(0, limit) + '...';
  }

}
