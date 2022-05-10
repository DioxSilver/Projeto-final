import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phones'
})
export class PhonesPipe implements PipeTransform {

  transform(value:string): string {
    const tL= value.split('');
    return`(${tL[0]}${tL[1]})${tL[2]}${tL[3]}${tL[4]}${tL[5]}-${tL[6]}${tL[7]}${tL[8]}${tL[9]}`;
  }

  }

