import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HospitalsService } from '../../services/Hospital/hospitals.service';
import { Hospital } from '../../Models/hospital.model';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AddAuthorityService } from '../../services/Hospital/add-authority.service';
import { GetHospitalService } from '../../services/Hospital/get-hospital.service';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../_services/model_service';
import { UpdateHospitalService } from '../../services/Hospital/update-hospital.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-hospital',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './all-hospital.component.html',
  styleUrl: './all-hospital.component.css',
})
export class AllHospitalComponent implements OnInit {
  @ViewChild('containt')
  bd_example!: ElementRef;

  @ViewChild('viweProfile')
  viewHospital!: ElementRef;

  // injecting service
  constructor(
    private allHospital: HospitalsService,
    private addAuthority: AddAuthorityService,
    private router: Router,
    private getHospitals: GetHospitalService,
    private modalService: ModalService,
    private updateHospitals: UpdateHospitalService,
    private modal : NgbModal,
  ) {}

  hospitalList: Hospital[] = []; // to store hospital list
  currentHospitalInfo: Hospital = {
    id: 0,
    name: '',
    registeration_number: '',
    owner_name: '',
    address: '',
    phone: '',
    type: '',
    email: '',
    payment: '',
    logo: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 0,
  };

  currOperation: string = '';

  //geting all hospital data
  ngOnInit(): void {
    this.allHospital.getAllHospitalList().subscribe({
      next: (res) => {
        this.hospitalList = res.data;
        // console.log(res.data);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  // add authority part
  authorityForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    registeration_number: new FormControl('', [Validators.required]),
    owner_name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    payment: new FormControl('', [Validators.required]),
    file: new FormControl<File | null| string>(null, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    drAssositated: new FormControl('', [Validators.required]),
  });



  onSubmit() {
    console.log('Submit button clicked');
    console.log('curr', this.currOperation)
    if (this.authorityForm.invalid) {
      console.error('Form is invalid');
      return;
    }
    // add hospital
    if (this.currOperation ==='addHospital') {
      // api call
      this.addAuthority.addHospital(this.authorityForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.resetForm();
          this.modal.dismissAll();
          this.ngOnInit();
        },
        error: (err) => {
          alert(err.error.message);
          console.error('Error:', err);
        },
      });
    }

    if (this.currOperation == 'updateHospital') {
      console.log('updating');
      console.log(this.authorityForm.value);   
      console.log(this.currentHospitalInfo.id);
      this.updateHospitals.update(this.currentHospitalInfo.id, this.authorityForm.value)
      .subscribe({
        next: (res)=>{
          console.log(res);
          this.modal.dismissAll();
          this.ngOnInit();
        },
        error: (err) => {
          alert(err.error.message);
          console.error('Error:', err);
        }
      })
        
    }
  }

  // resetting form
  resetForm() {
    this.authorityForm.reset();
  }

  // reading file data
  onImagePicked(event: Event): void {
    const imgfile = (event.target as HTMLInputElement).files?.[0];
    if (imgfile) {
      const fileType = imgfile.type;
      if (fileType === 'image/jpeg' || fileType === 'image/png') {
        const reader = new FileReader();
        // reader.onload = (e: ProgressEvent<FileReader>) => {
        //   this.url = e.target?.result as string;
        // };
        reader.readAsDataURL(imgfile);

        this.authorityForm.patchValue({ file: imgfile });
        this.authorityForm.updateValueAndValidity();
      } else {
        console.error('Invalid file type. Please select a JPEG or PNG image.');
      }
    }
  }

  // show data on card
  // showInfo(data: Hospital) {
  //   console.log('onClick');
  //   this.currentHospitalInfo = data;
  // }
  showInfo(id: number) {
    console.log('onClick');
    this.getselectedHOspital(id);
  }

  // display data on form
  // on update hospital data
  updateHospital(id:number) {
    this.getselectedHOspital(id);
  }

  // onImagePicked(event : any) {
  //   console.log("onImagePicked");
  //   let fileType =  event.target.files[0].type;
  //   if(fileType === 'image/jpeg' || fileType === 'image/png'){
  //       const imgfile = event.target.files[0];
  //       const reader = new FileReader();
  //       reader.readAsDataURL(event.target.files[0]);
  //         // reader.onload = (e: any) => {
  //         //   this.url = e.target.result;
  //         // };
  //         console.log("img",imgfile);
  //         // set data in form data
  //         this.authorityForm.patchValue({ file: imgfile });
  //         this.authorityForm.updateValueAndValidity();
  //   }else{
  //       console.log("Invalid file type. Please select a JPEG or PNG image.");
  //     }
  //   }

  // get form data

  //  add authority form functions
  get Email() {
    return this.authorityForm.get('email');
  }

  get Phone() {
    return this.authorityForm.get('phone');
  }

  get RegisterationNumber() {
    return this.authorityForm.get('registeration_number');
  }

  get OwnerName() {
    return this.authorityForm.get('owner_name');
  }

  get Address() {
    return this.authorityForm.get('address');
  }

  get Type() {
    return this.authorityForm.get('type');
  }

  get Payment() {
    return this.authorityForm.get('payment');
  }

  get FileImage() {
    return this.authorityForm.get('file');
  }

  get AuthorityName() {
    return this.authorityForm.get('name');
  }

  get DrAssositated() {
    return this.authorityForm.get('drAssositated');
  }

  // get hospital ditails based on id
  getselectedHOspital(id: number) {
    this.getHospitals.getHospitalDetials(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log('getHospital', res.data);
        this.currentHospitalInfo = res.data;
        this.authorityForm.patchValue(this.currentHospitalInfo);
      },
      error: (err) => {
        // log error message
        console.log(err.error.message);
      },
    });
  }

  onClick(currId:number ,modelType: string, content: any) {
    // console.log('modelType', modelType);
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-title',
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });

    // perform actions based on model type
    this.currOperation = modelType;

    if(modelType === 'viweProfile' && currId != -1){
       this.showInfo(currId);
    }else if(modelType === 'updateHospital' && currId != -1){
      console.log('hello');
      this.updateHospital(currId);
    }else{
      this.resetForm();
    }

  }
}
