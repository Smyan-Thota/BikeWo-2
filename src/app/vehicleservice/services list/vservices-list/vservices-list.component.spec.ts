import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VservicesListComponent } from './vservices-list.component';

describe('VservicesListComponent', () => {
  let component: VservicesListComponent;
  let fixture: ComponentFixture<VservicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VservicesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VservicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
