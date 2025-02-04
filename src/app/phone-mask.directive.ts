import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    let input = event.target.value.replace(/\D/g, ''); // Remove all non-numeric characters
    
    // Ensure exactly 10 digits are entered
    if (input.length > 10) {
      input = input.substring(0, 10);
    }

    let formatted = '';
    if (input.length === 10) {
      formatted = `(${input.substring(0, 3)}) ${input.substring(3, 6)}-${input.substring(6, 10)}`;
    } else {
      formatted = input; // Show only what is typed if less than 10 digits
    }

    this.el.nativeElement.value = formatted;

    // Prevent further input if the length reaches 10
    if (input.length >= 10) {
      event.target.value = formatted;
      event.preventDefault();
    }

    // Display a warning or reset if input is incomplete
    if (input.length < 10) {
      this.el.nativeElement.setCustomValidity('Please enter a valid 10-digit phone number.');
    } else {
      this.el.nativeElement.setCustomValidity('');
    }
  }
}
