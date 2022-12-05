import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcolorListComponent } from './vcolor-list.component';

describe('VcolorListComponent', () => {
  let component: VcolorListComponent;
  let fixture: ComponentFixture<VcolorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcolorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcolorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
