import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartseditComponent } from './partsedit.component';

describe('PartseditComponent', () => {
  let component: PartseditComponent;
  let fixture: ComponentFixture<PartseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartseditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
