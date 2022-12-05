import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcolorComponent } from './vcolor.component';

describe('VcolorComponent', () => {
  let component: VcolorComponent;
  let fixture: ComponentFixture<VcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcolorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
