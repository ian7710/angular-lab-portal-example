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

    formattedValue = formattedValue.replace(/_/g, (_match: string) => {
      if (index < value.length) {
        return value[index++];
      }
      return '_';
    });

    const cursorPos = input.selectionStart || formattedValue.length;
    input.value = formattedValue;
    input.setSelectionRange(cursorPos, cursorPos);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = this.el.nativeElement;
    const allowedChars = ['(', ')', '-', ' '];
    
    if (allowedChars.includes(event.key)) {
      event.preventDefault();
      const cursorPos = input.selectionStart;
      input.setSelectionRange(cursorPos + 1, cursorPos + 1);
    } else if (event.key === 'Backspace') {
      event.preventDefault();
      let value = input.value;
      let cursorPos = input.selectionStart || value.length;
      
      if (cursorPos > 0) {
        let newCursorPos = cursorPos - 1;
        while (newCursorPos > 0 && !/[0-9]/.test(value[newCursorPos])) {
          newCursorPos--;
        }
        value = value.substring(0, newCursorPos) + '_' + value.substring(newCursorPos + 1);
        input.value = value;
        input.setSelectionRange(newCursorPos, newCursorPos);
      }
    }
  }
}
