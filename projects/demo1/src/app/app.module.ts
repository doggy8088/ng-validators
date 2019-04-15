import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DtCompareEqualValidatorModule } from 'dt-compare-equal-validator';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DtCompareEqualValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
