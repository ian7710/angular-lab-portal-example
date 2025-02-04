import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    let input = event.target.value.replace(/\D/g, ''); // Remove all non-numeric characters

    if (input.length > 10) {
      input = input.substring(0, 10);
    }

    let formatted = '';
    if (input.length > 6) {
      formatted = `(${input.substring(0, 3)}) ${input.substring(3, 6)}-${input.substring(6, 10)}`;
    } else if (input.length > 3) {
      formatted = `(${input.substring(0, 3)}) ${input.substring(3)}`;
    } else {
      formatted = input;
    }

    this.el.nativeElement.value = formatted;
  }
}
