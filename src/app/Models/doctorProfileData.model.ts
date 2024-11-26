import { DoctorSlots } from "./doctorsSlots.models";
import { Patients } from "./patients.model";
export interface DoctorProfileData{
    id: number;
    firstname:string;
    lastname:string
    gender:string;
    email:string;
    phone:string;
    department:string;
    description:string;
    image:string;
    logitude:string|null;
    latitude:string|null;
    speciality:string;
    pendingPrice: string;
    completedPrice: string|null;
    createdAt:string;
    updatedAt:string;
    userId: number;
    hospitalId: number;
    doctorslots:DoctorSlots [],
    departmentName: string;
    patients:Patients [],
    totalPayment: number;
}