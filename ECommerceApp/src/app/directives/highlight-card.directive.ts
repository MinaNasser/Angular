import { Directive, ElementRef, HostListener, input, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true,
})
export class HighlightCardDirective implements OnChanges {
  // This directive is used to highlight the card when hovered over
  // It can be used in the product component to highlight the product cards
  // when the user hovers over them.    
  // The directive can be applied to any element by using the selector [appHighlightCard]
  // element: ElementRef;
  @Input() externalColor : string = 'gray';
  @Input('appHighlightCard') defaultColor : string = 'gray';
  constructor(private element: ElementRef) {
    //element.nativeElement.style.backgroundColor =this.defaultColor //'gray';
    element.nativeElement.style.padding = '10px';
    element.nativeElement.style.margin = '10px';
    element.nativeElement.style.borderRadius = '10px';
    element.nativeElement.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['externalColor']) {
      this.element.nativeElement.style.backgroundColor = this.defaultColor;
    }
  }
  @HostListener('mouseover') over() {
    this.element.nativeElement.style.backgroundColor =this.externalColor;//this.externalHighlight //'blue';
    this.element.nativeElement.style.color = 'white';
    this.element.nativeElement.style.transform = 'scale(1.05)';
    this.element.nativeElement.style.transition = 'all 0.3s ease-in-out';
  }
  @HostListener('mouseout') out() {
    this.element.nativeElement.style.backgroundColor =this.defaultColor //'gray';
    this.element.nativeElement.style.color = 'black';
    this.element.nativeElement.style.transform = 'scale(1)';
    this.element.nativeElement.style.transition = 'all 0.3s ease-in-out';
  }
  

}
 