// tslint:disable: no-use-before-declare

import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { compareEqual } from './compareEqual';

const COMPARE_EQUAL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CompareEqualDirective),
  multi: true
};

@Directive({
  selector: '[dtCompareEqual]',
  providers: [COMPARE_EQUAL_VALIDATOR]
})
export class CompareEqualDirective implements Validator {
  @Input() dtCompareEqual: string;
  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    return compareEqual(this.dtCompareEqual)(control);
  }
}
