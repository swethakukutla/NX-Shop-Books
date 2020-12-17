import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { PurchasedialogueboxComponent } from './purchasedialoguebox.component';

describe('PurchasedialogueboxComponent', () => {
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  let component: PurchasedialogueboxComponent;
  let fixture: ComponentFixture<PurchasedialogueboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasedialogueboxComponent],
      providers: [ {
        provide: MatDialogRef,
        useValue: mockDialogRef
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedialogueboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onClosedeleteCustomer should close the dialog', () => {
    component.onNoClick();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
