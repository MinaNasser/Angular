import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CheckImage',

})
export class CheckImagePipe implements PipeTransform {

  transform(imageUrl: string, defaultImgUrl: string = 'assets/images/default.jpg'): string {
    if (!imageUrl || imageUrl.trim() === '') {
      return defaultImgUrl;
    }
    return imageUrl;
  }

}
