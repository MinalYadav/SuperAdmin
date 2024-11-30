import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent implements OnInit {
  
  constructor(private router: Router){}

  ngOnInit(): void {
    console.log("ngOnInit")
    // this.router.navigate([this.cardLable[0].route]);
    console.log(this.cardLable[0].route);
    // this.router.navigate(['padingappointment']);
  }
  
  // create a object
  cardLable = [
    {
      label: 'Pending Appointment',
      route: 'padingappointment',
    },
    {
      label: 'Booked Appointment',
      route: 'bookedappointment',
    },
    {
      label: 'Closed Appointment',
      route: 'closedappointment',
    },
    {
      label: 'Rescheduled Appointment',
      route: 'rescheduledappointment',
    },
    {
      label: 'Under Treatment Appointment',
      route: 'undertreatmentappointment',
    },
  ];

  // index of activated tab 
  activeTab = 0;



  // on Click
  onClick(index: number,currLink:string) : void{
    this.activeTab = index;
    // this.router.navigate([`appointment/${currLink}`]) // work nahi kr raha 
    // this.router.navigateByUrl(currLink) // ye bhi problem create kr raha hai 
    console.log('current active tab: '+ this.activeTab)
    // confirm("current tab is" + this.activeTab)
  }


  

}
