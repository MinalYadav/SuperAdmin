import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduledAppointmentComponent } from './rescheduled-appointment.component';

describe('RescheduledAppointmentComponent', () => {
  let component: RescheduledAppointmentComponent;
  let fixture: ComponentFixture<RescheduledAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RescheduledAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RescheduledAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
