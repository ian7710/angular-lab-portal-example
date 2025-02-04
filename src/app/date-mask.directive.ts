import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateOnly]'
})
export class DateOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    let value = event.target.value.replace(/[^0-9]/g, '').slice(0, 8);
    value = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    this.el.nativeElement.value = value;
  }
}
