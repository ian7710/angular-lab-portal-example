import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validDate][formControlName],[validDate][formControl],[validDate][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidDateDirective),
      multi: true,
    },
  ],
})
export class ValidDateDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    // If there's no value, consider it valid (or handle required logic separately)
    if (!control.value) {
      return null;
    }

    // Attempt to parse the date
    const parsedDate = Date.parse(control.value);

    // Check if the date is valid
    const isValidDate = !isNaN(parsedDate);

    // Return an error object if invalid, otherwise null
    return isValidDate ? null : { invalidDate: true };
  }
}

