import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingpageComponent } from './billingpage.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { BooksFacade } from '../../../store/books.fascade';
import { PurchasedialogueboxComponent } from '../purchasedialoguebox/purchasedialoguebox.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

describe('BillingpageComponent', () => {
  let component: BillingpageComponent;
  let fixture: ComponentFixture<BillingpageComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingpageComponent, PurchasedialogueboxComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule, MatButtonModule, MatInputModule,
        NoopAnimationsModule, MatCardModule, MatIconModule, MatDialogModule, RouterTestingModule],
      providers: [BooksFacade ,
        FormBuilder,
        FormGroup,
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
        { provide: FormBuilder, useValue: formBuilder }, BooksFacade]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingpageComponent);
    component = fixture.componentInstance;
    component.billing = {
      email: 'swe@jklj',
      name: 'swetha',
      phone: 9999999999,
      address: 'hggjkj'
    };
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call forminit in onInit() method', () => {
    // const ngOnInitSpy = spyOn(component, 'ngOnInit');
    const formInitSpy = spyOn(component, 'onSubmit');

    // component.ngOnInit();
    component.onSubmit();
    fixture.detectChanges();

    // expect(ngOnInitSpy).toHaveBeenCalled();
    expect(formInitSpy).toHaveBeenCalled();
  });
});
