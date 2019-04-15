import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtCompareEqualValidatorComponent } from './dt-compare-equal-validator.component';

describe('DtCompareEqualValidatorComponent', () => {
  let component: DtCompareEqualValidatorComponent;
  let fixture: ComponentFixture<DtCompareEqualValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtCompareEqualValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtCompareEqualValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
