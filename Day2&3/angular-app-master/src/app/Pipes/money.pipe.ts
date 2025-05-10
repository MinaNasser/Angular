import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
})
export class MoneyPipe implements PipeTransform {
//5$ => 250EGP
  transform(value: number, currency:Currency):number {
    if (currency == Currency.EGP) {
      return value * 50;
    } else if(currency == Currency.EUR){
      return value *.5;
    }
    else if(currency == Currency.SR){
      return value *  3.5;
    }
    return value;
  }

}


export enum Currency{
  EGP,
  EUR,
  USD,
  SR

}