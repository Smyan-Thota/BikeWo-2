import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OemPURCHASEComponent } from './oem-purchase.component';

describe('OemPURCHASEComponent', () => {
  let component: OemPURCHASEComponent;
  let fixture: ComponentFixture<OemPURCHASEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OemPURCHASEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OemPURCHASEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
