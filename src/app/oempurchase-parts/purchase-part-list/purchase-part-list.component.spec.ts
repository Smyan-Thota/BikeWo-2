import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePartListComponent } from './purchase-part-list.component';

describe('PurchasePartListComponent', () => {
  let component: PurchasePartListComponent;
  let fixture: ComponentFixture<PurchasePartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasePartListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasePartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
