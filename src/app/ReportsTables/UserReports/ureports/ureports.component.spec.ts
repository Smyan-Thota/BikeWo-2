import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UreportsComponent } from './ureports.component';

describe('UreportsComponent', () => {
  let component: UreportsComponent;
  let fixture: ComponentFixture<UreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
