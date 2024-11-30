import { Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { authGuard } from './Guard/auth.guard';
import { DoctorsComponent } from './Component/doctors/doctors.component';
import { AddDoctorComponent } from './Component/add-doctor/add-doctor.component';
import { DoctorProfileComponent } from './Component/doctor-profile/doctor-profile.component';
import { AllHospitalComponent } from './Component/all-hospital/all-hospital.component';
import { PharmaciesComponent } from './Component/pharmacies/pharmacies.component';
import { AppointmentComponent } from './Component/appointment/appointment.component';
import { PendingAppointmentComponent } from './Component/appointment/pending-appointment/pending-appointment.component';
import { BookedAppointmentComponent } from './Component/appointment/booked-appointment/booked-appointment.component';
import { ClosedAppointmentComponent } from './Component/appointment/closed-appointment/closed-appointment.component';
import { RescheduledAppointmentComponent } from './Component/appointment/rescheduled-appointment/rescheduled-appointment.component';
import { UnderTreatmentAppointmentComponent } from './Component/appointment/under-treatment-appointment/under-treatment-appointment.component';
import { CallCenterComponent } from './Component/call-center/call-center.component';
import { InsuranceCompanyComponent } from './Component/insurance-company/insurance-company.component';
import { LabsComponent } from './Component/labs/labs.component';
import { PatientsComponent } from './Component/patients/patients.component';
import { CallEmpProfileComponent } from './Component/call-emp-profile/call-emp-profile.component';


export const routes: Routes = [
  // route gurd and route resolver in angular 
  // {
  //   path:'',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'layout',
    component: LayoutComponent,
    // canActivate:[authGuard],
    children:[
      {
        path:'adminDashboard',
        component: AdminDashboardComponent,
        canActivate:[authGuard]
      },
      {
        path:'doctors',
        component:DoctorsComponent,
      },
      {
        path:'addDoctor',
        component:AddDoctorComponent,
      },
      {
        path:'doctorProfile/:id',
        component:DoctorProfileComponent,
      },
      {
        path:'allHospitals',
        component:AllHospitalComponent,
      },
      {
        path:'pharmacies',
        component:PharmaciesComponent,
      },
      {
        path:'appointment',
        component:AppointmentComponent,
        children:[
          {
            path:'padingappointment',
            component:PendingAppointmentComponent,
          },
          {
            path:'bookedappointment',
            component: BookedAppointmentComponent,
          },
          {
            path:'closedappointment',
            component:ClosedAppointmentComponent
          },
          {
            path:'rescheduledappointment',
            component:RescheduledAppointmentComponent,
          },
          {
           path:'undertreatmentappointment',
           component:UnderTreatmentAppointmentComponent, 
          }
        ]

      },
      {
        path:'callcenter',
        component:CallCenterComponent
      },
      {
        path:'callEmpProfile/:id',
        component:CallEmpProfileComponent,

      },
      {
        path:'insuranceCompany',
        component:InsuranceCompanyComponent
      },
      {
        path:'labs',
        component: LabsComponent,
      },
      {
        path:'patients',
        component:PatientsComponent,
      },
    ]
  },
  { path: '**', redirectTo: 'login' }, // Fallback route
];
