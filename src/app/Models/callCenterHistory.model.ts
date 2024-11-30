import { CallCenter } from "./callCenter.model"
import { DoctorAssigningHistory } from "./doctorAssigningHistory.model";
import { OngoingCall } from "./ongoingCalls.model";

export interface CallCenterHistory{
  data:{
    callCenter: CallCenter;
    ongoingCalls: OngoingCall[];
    doctorAssigningHistory : DoctorAssigningHistory[];
  };
  status : boolean;

}