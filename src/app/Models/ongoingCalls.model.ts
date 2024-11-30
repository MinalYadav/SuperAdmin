export interface OngoingCall{
  id: number,
  appointmentId:string,
  link: null| string,
  doctorId: null| number,
  isAppointmentCreated: number,
  start_time: null| string,
  end_time: null| string,
  date: null| string,
  heplerId: null| number,
  createdAt: string,
  updatedAt: string,
  userId: number,
  appointment: {
    date: string,
    slot: string,
    userStatus: string,
    userId: number,
    department: string,
    departmentName: string,
    userName: string
  }
}