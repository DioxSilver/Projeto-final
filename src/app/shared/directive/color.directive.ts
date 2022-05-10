import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'blue';
   }

}
