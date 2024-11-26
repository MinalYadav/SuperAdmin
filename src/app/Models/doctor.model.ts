export interface Doctor {
  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  phone: string;
  departmentId: string;
  description: string;
  image: string;
  logitude: number | null;
  latitude: number | null;
  speciality: string | null;
  pendingPrice: string | null;
  completedPrice: string | null;
  createdAt: string;
  updatedAt: string;
  userId: number;
  hospitalId: number | null;
  departmentName: string;
}



// {
//   "id": 1,
//   "firstname": "Dr.",
//   "lastname": "Mudrika",
//   "gender": "Female",
//   "email": "docter@mailinator.com",
//   "phone": "1234567890",
//   "departmentId": "2",
//   "description": "having 10+ year of experience ",
//   "image": "http://168.235.81.206:3000/assets/profile/1690440433402-pexels-artem-podrez-5726788.jpg",
//   "logitude": null,
//   "latitude": null,
//   "speciality": "eye specialist",
//   "pendingPrice": "4408.666666666667",
//   "completedPrice": "63",
//   "createdAt": "2023-07-27T06:39:46.000Z",
//   "updatedAt": "2024-07-02T11:00:21.000Z",
//   "userId": 285,
//   "hospitalId": 1,
//   "departmentName": "Eye Care"
// }