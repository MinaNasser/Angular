import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
  standalone: true
})
export class SquarePipe implements PipeTransform {

  transform(value: number , p: number=2  ): number {
    if (isNaN(value)) {
      return 0; // or handle the error as needed
    }
    return Math.pow(value, p); // Square the value

  }

}
