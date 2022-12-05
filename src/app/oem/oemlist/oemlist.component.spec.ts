import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OEMListComponent } from './oemlist.component';

describe('OEMListComponent', () => {
  let component: OEMListComponent;
  let fixture: ComponentFixture<OEMListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OEMListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OEMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
