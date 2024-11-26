import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderTreatmentAppointmentComponent } from './under-treatment-appointment.component';

describe('UnderTreatmentAppointmentComponent', () => {
  let component: UnderTreatmentAppointmentComponent;
  let fixture: ComponentFixture<UnderTreatmentAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderTreatmentAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderTreatmentAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
