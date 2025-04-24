import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CheckImage',
  standalone:false,

})
export class CheckImagePipe implements PipeTransform {

  transform(imageUrl: string, defaultImgUrl: string = 'images/default.jpg'): string {
    if (!imageUrl || imageUrl.trim() === '') {
      return defaultImgUrl;
    }
    return imageUrl;
  }

}
