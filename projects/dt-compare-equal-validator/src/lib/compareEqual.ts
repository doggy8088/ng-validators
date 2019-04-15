import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function compareEqual(controlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent || control.parent.get(controlName).value === control.value) {
      return null;
    } else {
      return { compareEqual: true };
    }
  };
}
