import { Injectable } from '@angular/core';
import { Card } from '../../Models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  cards: Card [] =[
    { routeslink:"patients.html",
      iconName:"fa-solid fa-bed-pulse",
      number: 558,
      title:"Total Patients",
    },
    { routeslink:"doctors.html",
      iconName:"fa-solid fa-bed-pulse",
      number: 64,
      title:"Total Doctors",
    },
    { routeslink:"Authority.html",
      iconName:"fa-regular fa-hospital",
      number: 112,
      title:"Hospitals",
    },
    { routeslink:"Authority.html",
      iconName:"fa-solid fa-circle-h",
      number: 112,
      title:"Clinics",
    },
    { routeslink:"insurancecompany.html",
      iconName:"fa-solid fa-shield-heart",
      number: 11,
      title:"Insurance Companies",
    },
    { routeslink:"labs.html",
      iconName:"fa-solid fa-microscope",
      number: 112,
      title:"Labs",
    },
    { routeslink:"pharmacies.html",
      iconName:"fa-solid fa-store",
      number: 56,
      title:"Pharmacies",
    },
    { routeslink:"appointment.html",
      iconName:"fa-regular fa-calendar-plus",
      number: 220,
      title:"Total Appointment",
    },
    { routeslink:"#!",
      iconName:"fa-solid fa-ribbon",
      number: 100,
      title:"Total Emergency Cases",
    },
    { routeslink:"#!",
      iconName:"fa-solid fa-handshake-angle",
      number: 10,
      title:"Doctors Assigned today",
    },
    { routeslink:"#!",
      iconName:"fa-solid fa-bed",
      number: 10,
      title:"Today's Patients",
    },
    { routeslink:"#!",
      iconName:"fa-solid fa-heart-circle-bolt",
      number: 10,
      title:"Emergency Booked today",
    },
  ]

  getCards(): Card[] {
    return this.cards;
  }

}
