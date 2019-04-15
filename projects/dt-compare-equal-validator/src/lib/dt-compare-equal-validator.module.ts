import { NgModule } from '@angular/core';
import { DtCompareEqualValidatorComponent } from './dt-compare-equal-validator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DtCompareEqualValidatorComponent],
  imports: [
    FormsModule
  ],
  exports: [DtCompareEqualValidatorComponent]
})
export class DtCompareEqualValidatorModule { }
