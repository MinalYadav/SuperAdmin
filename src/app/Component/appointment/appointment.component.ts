import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  // create a object 

  cardLable = [{
    label: 'Pending Appointment',
    route: 'padingappointment'
  },
  {
    label: 'Booked Appointment',
    route: 'bookedappointment'
  },
  {
    label: 'Closed Appointment',
    route: 'closedappointment'
  },
  {
    label:'Rescheduled Appointment',
    route:'rescheduledappointment'
  },
  {
    label:'Under Treatment Appointment',
    route:'undertreatmentappointment'
  }
]



}
