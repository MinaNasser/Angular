import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CheckImage',
  standalone: true
})
export class CheckImagePipe implements PipeTransform {

  transform(imageUrl: string, defaultImgUrl: string = 'images/default.jpg'): string {
    if (!imageUrl || imageUrl.trim() === '') {
      return defaultImgUrl;
    }
    return imageUrl;
  }

}
