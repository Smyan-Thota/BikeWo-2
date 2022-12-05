import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OempurchasePartsComponent } from './oempurchase-parts.component';

describe('OempurchasePartsComponent', () => {
  let component: OempurchasePartsComponent;
  let fixture: ComponentFixture<OempurchasePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OempurchasePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OempurchasePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
