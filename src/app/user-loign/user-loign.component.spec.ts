import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoignComponent } from './user-loign.component';

describe('UserLoignComponent', () => {
  let component: UserLoignComponent;
  let fixture: ComponentFixture<UserLoignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
