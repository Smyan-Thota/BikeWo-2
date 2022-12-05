import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleserviceComponent } from './vehicleservice.component';

describe('VehicleserviceComponent', () => {
  let component: VehicleserviceComponent;
  let fixture: ComponentFixture<VehicleserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
