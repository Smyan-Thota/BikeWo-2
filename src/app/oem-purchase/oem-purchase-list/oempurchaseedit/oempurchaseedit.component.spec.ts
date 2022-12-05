import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OempurchaseeditComponent } from './oempurchaseedit.component';

describe('OempurchaseeditComponent', () => {
  let component: OempurchaseeditComponent;
  let fixture: ComponentFixture<OempurchaseeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OempurchaseeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OempurchaseeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
