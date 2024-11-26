import { Component } from '@angular/core';
import { DocCardComponent } from '../doc-card/doc-card.component';
import { DoctorDataService } from '../../services/Doctor/doctor-data.service';
import { Doctor } from '../../Models/doctor.model';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
// import { routes } from '../../app.routes';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [RouterOutlet, DocCardComponent],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css',
})
export class DoctorsComponent {
  //  creating a doctor array of Doctor type
  doctors: Doctor[] = [];

  constructor(private docData: DoctorDataService, private router: Router) {}

  selectedCard(doctor: Doctor) {
    console.log('Hello from firstFunction', doctor);

    // navigate to doctor profile page by passing doctor id as parameter

    // this.router.navigateByUrl('layout/addDoctor');

    this.router.navigateByUrl(`${'layout'}/${'doctorProfile'}/${doctor.id}`);
  }

  // selectDoctor(doctor:Doctor) {
  //  return doctor;
  // }

  ngOnInit(): void {
    this.docData.getAllDoctors().subscribe({
      next: (res) => {
        console.log('All doctors', res);
        this.doctors = res.data;
        console.log('work', this.doctors);
      },
      error: (err) => {
        console.error('Error fetching doctors', err);
      },
    });
  }

  redirect() {
    this.router.navigateByUrl('layout/addDoctor');
  }
}
