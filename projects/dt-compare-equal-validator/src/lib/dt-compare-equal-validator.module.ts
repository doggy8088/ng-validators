import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompareEqualDirective } from './compare-equal.directive';

@NgModule({
  declarations: [CompareEqualDirective],
  imports: [
    FormsModule
  ],
  exports: [CompareEqualDirective]
})
export class DtCompareEqualValidatorModule { }
