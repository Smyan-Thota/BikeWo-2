import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsListComponent } from './vehicle-details-list.component';

describe('VehicleDetailsListComponent', () => {
  let component: VehicleDetailsListComponent;
  let fixture: ComponentFixture<VehicleDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
