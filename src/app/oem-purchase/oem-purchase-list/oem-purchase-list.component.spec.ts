import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OemPURCHASEListComponent } from './oem-purchase-list.component';

describe('OemPURCHASEListComponent', () => {
  let component: OemPURCHASEListComponent;
  let fixture: ComponentFixture<OemPURCHASEListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OemPURCHASEListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OemPURCHASEListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
