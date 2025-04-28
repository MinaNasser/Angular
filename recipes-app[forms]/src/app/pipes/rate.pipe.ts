import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
  standalone: true,
})
export class RatePipe implements PipeTransform {

  transform(value: number): string {
    return value > 3 ? 'Good Recipe' : 'Normal Recipe';
  }

}
