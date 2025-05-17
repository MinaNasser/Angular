import { HighlightCardDirective } from './highlight-card.directive';
import { ElementRef } from '@angular/core';

describe('HighlightCardDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new HighlightCardDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
