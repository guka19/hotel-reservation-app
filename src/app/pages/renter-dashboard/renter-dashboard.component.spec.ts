import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterDashboardComponent } from './renter-dashboard.component';

describe('RenterDashboardComponent', () => {
  let component: RenterDashboardComponent;
  let fixture: ComponentFixture<RenterDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenterDashboardComponent]
    });
    fixture = TestBed.createComponent(RenterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
