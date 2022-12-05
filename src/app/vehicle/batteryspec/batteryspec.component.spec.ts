import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryspecComponent } from './batteryspec.component';

describe('BatteryspecComponent', () => {
  let component: BatteryspecComponent;
  let fixture: ComponentFixture<BatteryspecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryspecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteryspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
