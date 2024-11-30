import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallCenteService } from '../../services/callCenter/call-cente.service';
import { CallCenter } from '../../Models/callCenter.model';
import { DoctorAssigningHistory } from '../../Models/doctorAssigningHistory.model';
import { OngoingCall } from '../../Models/ongoingCalls.model';


@Component({
  selector: 'app-call-emp-profile',
  standalone: true,
  imports: [],
  templateUrl: './call-emp-profile.component.html',
  styleUrl: './call-emp-profile.component.css',
})
export class CallEmpProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private callService: CallCenteService
  ) {}

  callCenterData: CallCenter = {
    id: 0,
    name: '',
    uniqueId: '',
    mobile: '',
    gender: '',
    Address: '',
    shift: '',
    email: '',
    status: '',
    createdAt: '',
    updatedAt: '',
    userId: 0,
    totalBookings: 0,
    emergencyBookings: 0,
  };
  doctorData: DoctorAssigningHistory[] = [];
  ongoingCallsData: OngoingCall[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      const empId = p.get('id');
      // console.log(empId);
      if (typeof empId == 'string') {
        this.callService.getCallCenterEmployee(empId).subscribe({
          next: (res) => {
            console.log(res);
            this.callCenterData = res.data.callCenter;
            this.doctorData = res.data.doctorAssigningHistory;
            this.ongoingCallsData = res.data.ongoingCalls;
            
          },
          error: (error) => {
            console.error(error);
          },
        });
      }
    });
  }
}
