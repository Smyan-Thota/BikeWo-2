import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreportsComponent } from './dreports.component';

describe('DreportsComponent', () => {
  let component: DreportsComponent;
  let fixture: ComponentFixture<DreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
