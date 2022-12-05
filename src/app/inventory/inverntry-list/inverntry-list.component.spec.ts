import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverntryListComponent } from './inverntry-list.component';

describe('InverntryListComponent', () => {
  let component: InverntryListComponent;
  let fixture: ComponentFixture<InverntryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InverntryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InverntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
