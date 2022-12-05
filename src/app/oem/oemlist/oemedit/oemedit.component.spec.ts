import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OemeditComponent } from './oemedit.component';

describe('OemeditComponent', () => {
  let component: OemeditComponent;
  let fixture: ComponentFixture<OemeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OemeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OemeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
