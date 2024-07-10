import { Directive, ElementRef, HostListener } from '@angular/core';
import { RegexConstants } from '../constants/RegexConstants';

@Directive({
  selector: '[appAlphanumeric]'
})
export class AlphanumericDirective {

  constructor(private el: ElementRef) { }

  regexStr = RegexConstants.ALPHA_NUMERIC;

  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    return new RegExp(this.regexStr).test(event.key);
  }

}
