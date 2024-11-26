import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedAppointmentComponent } from './closed-appointment.component';

describe('ClosedAppointmentComponent', () => {
  let component: ClosedAppointmentComponent;
  let fixture: ComponentFixture<ClosedAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosedAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
