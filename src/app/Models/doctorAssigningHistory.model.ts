export interface DoctorAssigningHistory{
  start_time: string,
  end_time: string,
  doctorId: string,
  appointmentId: string,
  date: string,
  doctor: {
    firstname: string,
    departmentId: string,
    hospitalId: string,
    status: string
  }
}