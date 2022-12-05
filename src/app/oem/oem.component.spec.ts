import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OEMComponent } from './oem.component';

describe('OEMComponent', () => {
  let component: OEMComponent;
  let fixture: ComponentFixture<OEMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OEMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OEMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
