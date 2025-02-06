import { Directive, ElementRef, HostListener } from '@angular/core';

  @Directive({
    selector: '[appPhoneNumber]'
  })
  export class PhoneNumberDirective {
    private phoneFormat = '(___) ___-____ Ext. ____';
  
    constructor(private el: ElementRef) {
      this.el.nativeElement.value = this.phoneFormat;
    }
  
    @HostListener('input', ['$event'])
    onInput(event: InputEvent) {
      const input = this.el.nativeElement;
      let value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      
      let formattedValue = this.phoneFormat;
      let index = 0;
  
      formattedValue = formattedValue.replace(/X/g, (_match: string) => {
        if (index < value.length) {
          return value[index++];
        }
        return 'X';
      });
  
      input.value = formattedValue;
      input.setSelectionRange(input.value.indexOf('X'), input.value.indexOf('X'));
    }
  
    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
      const input = this.el.nativeElement;
      const cursorPos = input.selectionStart || 0;
      
      // Prevent deletion of parentheses
      if (event.key === 'Backspace' && (cursorPos === 1 || cursorPos === 5)) {
        event.preventDefault();
        return;
      }
  
      if (event.key === 'Backspace') {
        event.preventDefault();
        let value = input.value.split('');
        let newCursorPos = cursorPos - 1;
        
        while (newCursorPos > 0 && !/[0-9]/.test(value[newCursorPos])) {
          newCursorPos--;
        }
        if (newCursorPos >= 0) {
          value[newCursorPos] = 'X';
        }
        input.value = value.join('');
        input.setSelectionRange(newCursorPos, newCursorPos);
      }
    }
  }
  