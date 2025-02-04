import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSsnMask]'
})
export class SsnMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent) {
    let value = this.el.nativeElement.value.replace(/\D/g, ''); // Remove non-numeric characters

    if (value.length > 9) {
      value = value.substring(0, 9); // Limit to 9 digits
    }

    // Apply the SSN format: XXX-XX-XXXX
    if (value.length > 5) {
      value = `${value.substring(0, 3)}-${value.substring(3, 5)}-${value.substring(5)}`;
    } else if (value.length > 3) {
      value = `${value.substring(0, 3)}-${value.substring(3)}`;
    }

    this.el.nativeElement.value = value;
  }
}

